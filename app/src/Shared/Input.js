import React, { useState } from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  border: 1px solid ${props => props.valid ? props.theme.type.primary : props.theme.type.danger};
  color: ${props => props.valid ? props.theme.type.primary : props.theme.type.danger};
  padding: 8px 16px;
  margin: 16px;
`

export default function Input (props) {
  return <StyledInput {...props} />
}
