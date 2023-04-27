import type { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { PageContainer as Container } from 'lugo'
import { breakpoint, spacing } from './style/theme'
import Board from './components/Board'

const App = styled((props: HTMLAttributes<HTMLDivElement>) => (
  <div {...props}>
    <Container maxWidth={breakpoint.tablet} sideMargin={spacing.sideMargin}>
      <Board />
    </Container>
  </div>
))`
  margin-top: 10vh;
  margin-bottom: 10vh;

  @media screen and (${spacing.tabletMaxWidth}) {
    margin-top: 5vh;
    margin-bottom: 5vh;
  }
`

export default App
