import type { HTMLAttributes } from 'react'
import styled from 'styled-components'
import Header from '../../style/Header'
import Buttons from './Buttons'

const Panel = styled((props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props}>
      <Header>Hit or Stick?</Header>
      <Buttons />
    </div>
  )
})`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export default Panel
