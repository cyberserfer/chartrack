import React, { useState } from 'react'
import styled from 'styled-components'
import Input from 'Shared/Input'

const SignUpForm = styled.form`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
function ValidateEmail(mail) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail) ? true : false
}

export default function SignUp (props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRetype, setPasswordRetype] = useState('')
  return (
    <SignUpForm>
      <Input 
        valid={ValidateEmail(email)} 
        type='text' 
        value={email} 
        onChange={({target: { value  }}) => setEmail(value)} />
      <Input 
        valid={password === passwordRetype} 
        type='password' 
        value={password} 
        onChange={({target: { value  }}) => setPassword(value)} />
      <Input 
        valid={password === passwordRetype} 
        type='password' 
        value={passwordRetype} 
        onChange={({target: { value  }}) => setPasswordRetype(value)} />
    </SignUpForm>
  )
}
