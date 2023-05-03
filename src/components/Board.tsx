import type { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { background, spacing } from '../style/theme'
import Panel from '../features/panel/Panel'
import Player from '../features/player/Player'

const PlayerWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
`

const Board = styled((props: HTMLAttributes<HTMLDivElement>) => (
  <div {...props}>
    <Panel />
    <PlayerWrapper>
      <Player />
      <Player />
    </PlayerWrapper>
  </div>
))`
  display: flex;
  min-height: calc(100vh - (${spacing.viewportHeight} * 2));
  flex-direction: column;
  align-items: center;

  background-color: ${background.secondary};
  border-radius: 8px;

  padding: 2rem;

  @media screen and (${spacing.tabletMaxWidth}) {
    min-height: calc(100vh - ${spacing.viewportHeight});
  }
`

export default Board
