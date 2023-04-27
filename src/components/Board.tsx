import type { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { background, space } from '../style/theme'
import Panel from '../features/panel/Panel'

const Board = styled((props: HTMLAttributes<HTMLDivElement>) => (
  <div {...props}>
    <Panel />
  </div>
))`
  display: flex;
  min-height: 80vh;
  flex-direction: column;
  align-items: center;

  background-color: ${background.secondary};
  border-radius: 8px;

  padding: ${space.sideMargin};
`

export default Board
