import type { HTMLAttributes } from 'react'
import styled from 'styled-components'
import Button from '../../style/Button'
import { spacing } from '../../style/theme'

const Buttons = styled((props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props}>
      <Button>Hit</Button>
      <Button>Stick</Button>
      <Button disabled>Replay</Button>
    </div>
  )
})`
  display: flex;
  gap: 1rem;

  @media screen and (${spacing.mobileMaxWidth}) {
    flex-direction: column;
    min-height: 90vh;
    width: 100%;
  }
`

export default Buttons
