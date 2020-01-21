import React, { useState, useEffect } from 'react'
import { navigate } from '@reach/router'
import styled from 'styled-components'
import { useMutation } from '@apollo/react-hooks'
import CharacterBrowser from './CharacterBrowser'
import gql from 'graphql-tag'

const LoginWrapper = styled.div`
	width: 100%;
	height: 100vh;
  background-image: url('https://www.drivethrurpg.com/shared_images/site_resources/SWAG_artwork.png');
  background-size: cover;
  background-position: center;
	display: flex;
	justify-content: center;
	align-items: center;
	form {
    background-color: white;
    padding: 32px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		div {
			display: flex;
			flex-direction: column;
      label {
        color: ${props => props.theme.colors.primary};
      }
			input {
				margin: 16px 0;
				width: 30vw;
				padding: 8px 16px;
			}
		}
		button {
			padding: 16px 8px;
		}
	}
`

const LOGIN = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(data: { email: $email, password: $password }) {
      token
      userId
    }
  }
`

function LandingContainer(props) {
  const [authed, setAuthed] = useState(window.localStorage.getItem('jwt'))
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [logIn, { data, loading, error }] = useMutation(LOGIN)

  useEffect(() => {
    if (data) {
      window.localStorage.setItem('jwt', data.signIn.token)
      setAuthed(window.localStorage.getItem('jwt'))
      navigate('/')
    }
  }, [data, authed])

  if (loading) return <p>Loading...</p>
  if (error) return <p>FUCK THERE WAS AN ERROR!!!</p>
  return (
    <>
      {window.localStorage.getItem('jwt') ? (
        <CharacterBrowser />
      ) : (
          <LoginWrapper>
            <form
              onSubmit={e => {
                e.preventDefault()
                logIn({ variables: { email, password } })
                setEmail('')
                setPassword('')
              }}
            >
              <div>
                <label>Email</label>
                <input
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder='Email'
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  type='password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder='Password'
                />
              </div>
              <button>login</button>
            </form>
          </LoginWrapper>
        )}
    </>
  )
}

export default LandingContainer
