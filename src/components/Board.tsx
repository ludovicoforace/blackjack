import type { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { background, spacing } from '../style/theme'
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

  padding: ${spacing.sideMargin};

  @media screen and (${spacing.tabletMaxWidth}) {
    min-height: 90vh;
  }
`

export default Board
