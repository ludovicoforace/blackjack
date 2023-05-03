import type { HTMLAttributes } from 'react'
import styled from 'styled-components'
import Header from '../../style/Header'
import Buttons from './Buttons'
import { spacing } from '../../style/theme'

const Panel = styled((props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props}>
      <Header withShadow>Hit or Stick?</Header>
      <Buttons />
    </div>
  )
})`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (${spacing.tabletMaxWidth}) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    text-align: center;
  }
`

export default Panel
