import type { HTMLAttributes } from 'react'
import styled from 'styled-components'
import Button from '../../style/Button'

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
`

export default Buttons
