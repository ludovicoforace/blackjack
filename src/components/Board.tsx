import type { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { background } from '../style/theme'

const Board = styled((props: HTMLAttributes<HTMLDivElement>) => (
  <div {...props}>HELLO</div>
))`
  display: flex;
  min-height: 80vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${background.secondary};
  border-radius: 8px;
`

export default Board
