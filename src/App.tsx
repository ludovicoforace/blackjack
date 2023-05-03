import type { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { PageContainer } from 'lugo'
import { breakpoint, spacing } from './style/theme'
import Board from './components/Board'

const App = styled((props: HTMLAttributes<HTMLDivElement>) => (
  <PageContainer {...props} maxWidth={breakpoint.laptop}>
    <Board />
  </PageContainer>
))`
  padding: 0 2rem;

  margin-top: ${spacing.viewportHeight};
  margin-bottom: ${spacing.viewportHeight};

  @media screen and (${spacing.tabletMaxWidth}) {
    padding: 0 1rem;

    margin-top: calc(${spacing.viewportHeight} / 2);
    margin-bottom: calc(${spacing.viewportHeight} / 2);
  }
`

export default App
