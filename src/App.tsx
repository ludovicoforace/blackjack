import type { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { PageContainer } from 'lugo'
import { breakpoint, spacing } from './style/theme'
import Board from './components/Board'

const Container = styled(PageContainer)`
  padding: 0 ${spacing.viewportHeight};

  @media screen and (${spacing.tabletMaxWidth}) {
    padding: 0 calc(${spacing.viewportHeight} / 2);
  }
`

const App = styled((props: HTMLAttributes<HTMLDivElement>) => (
  <div {...props}>
    <Container maxWidth={breakpoint.laptop} sideMargin={spacing.viewportHeight}>
      <Board />
    </Container>
  </div>
))`
  margin-top: ${spacing.viewportHeight};
  margin-bottom: ${spacing.viewportHeight};

  @media screen and (${spacing.tabletMaxWidth}) {
    margin-top: calc(${spacing.viewportHeight} / 2);
    margin-bottom: calc(${spacing.viewportHeight} / 2);
  }
`

export default App
