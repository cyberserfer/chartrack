import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { Box, Button, Flex } from 'rebass/styled-components'
import { Label, Input } from '@rebass/forms'
import PropTypes from 'prop-types'

const SIGNIN = gql`
  mutation signIn($data: UserInput!) {
    signIn(data: $data) {
      token
    }
  }
`

function LandingContainer (props) {
  const [authed, setAuthed] = useState(window.localStorage.getItem('jwt'))
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signIn, { data, loading, error }] = useMutation(SIGNIN)
  useEffect(
    () => {
      if (data) {
        window.localStorage.setItem('jwt', data.signIn.token)
        setAuthed(window.localStorage.getItem('jwt'))
        props.history.push('/savageSheet')
      }
    },
    [data, authed]
  )
  if (loading) {
    return <Box>LOADING</Box>
  }
  if (error) {
    return <Box>{error.message}</Box>
  }
  return (
    <Flex
      sx={{
        backgroundImage:
          'url(https://www.drivethrurpg.com/shared_images/site_resources/SWAG_artwork.png)',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
      width='100%'
      height='100vh'
      justifyContent='center'
      alignItems='center;'
      p={[16, 32]}
    >
      <Box
        as='form'
        onSubmit={e => {
          e.preventDefault()
          signIn({ variables: { data: { email, password } } })
          setEmail('')
          setPassword('')
        }}
        width={[1, 1, 1 / 3]}
        bg='white'
        p={4}
      >
        <Flex mx={-2} mb={3}>
          <Box width={1} px={2}>
            <Label htmlFor='name'>Email</Label>
            <Input
              id='email'
              name='email'
              value={email}
              placeholder='Email'
              onChange={e => setEmail(e.target.value)}
            />
          </Box>
        </Flex>
        <Flex mx={-2} mb={3}>
          <Box width={1} px={2}>
            <Label htmlFor='name'>Password</Label>
            <Input
              type='password'
              id='password'
              name='password'
              value={password}
              placeholder='Password'
              onChange={e => setPassword(e.target.value)}
            />
          </Box>
        </Flex>
        <Flex mx={-2} flexWrap='wrap'>
          <Box px={2} ml='auto'>
            <Button>Login</Button>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}
LandingContainer.propTypes = {
  history: PropTypes.object
}
export default withRouter(LandingContainer)
