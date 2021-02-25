import React from 'react'
import Form from './components/Form'
import styled from 'styled-components'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;

`

export default function App(){
  return (
    <Root>
        <h1>Hello</h1>
        <Form />
    </Root>
  )
}