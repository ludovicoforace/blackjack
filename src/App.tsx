import type { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { PageContainer as Container } from 'lugo'
import { breakpoint, space } from './style/theme'
import Board from './components/Board'

const App = styled((props: HTMLAttributes<HTMLDivElement>) => (
  <div {...props}>
    <Container maxWidth={breakpoint.tablet} sideMargin={space.sideMargin}>
      <Board />
    </Container>
  </div>
))`
  margin-top: 10vh;
  margin-bottom: 10vh;
`

export default App
