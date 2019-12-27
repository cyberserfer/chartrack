import React from 'react'
import { Router } from '@reach/router'
import SignUp from './Container/SignUp'


export default function Layout (props) {
  return (
    <Router>
      <SignUp path='/' />
    </Router>
  )
}
