import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import CharacterBrowser from './characterBrowser'

const LoginWrapper = styled.div`
	width: 100%;
	height: 85vh;
	display: flex;
	justify-content: center;
	align-items: center;
	form {
		display: flex;
		flex-direction: column;
		jusitfy-content: center;
		div {
			display: flex;
			flex-direction: column;
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
`;

const LOGIN = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(data: { email: $email, password: $password }) {
      token
      userId
    }
  }
`

function LandingContainer(props) {
  console.log('local storage', window.localStorage.getItem("jwt"))
  const [authed, setAuthed] = useState(window.localStorage.getItem("jwt"))
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [logIn, { data, loading, error }] = useMutation(LOGIN)
  
  useEffect(() => {
    if (data) {

      console.log('data', data)
      window.localStorage.setItem("jwt", data.signIn.token)
      window.localStorage.setItem("userId", data.signIn.userId)
      setAuthed(window.localStorage.getItem("jwt"))
      props.history.push("/savageSheet")
    }
  }, [data, authed])
  console.log('email:', email, 'authed:', authed, window.localStorage, 'data:', data)
  return (
  authed ? (
    <>
    <div>you are authed</div>
    <CharacterBrowser history={props.history} />
    </>
  ) : 
  (
    <LoginWrapper>
      <form
        onSubmit={e => {
          e.preventDefault()
          logIn({ variables: { email, password } })
          setEmail("")
          setPassword("")
        }}
      >
        <div>
          <label>email</label>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div>
          <label>password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <button>login</button>
      </form>
    </LoginWrapper>
  ))
}
export default withRouter(LandingContainer);
