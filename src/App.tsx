import styled from 'styled-components'
import { PageContainer } from 'lugo'
import { breakpoint, spacing } from './style/theme'
import Board from './components/Board'

const App = styled(({ ...props }) => (
  <PageContainer
    {...props}
    maxWidth={breakpoint.laptop}
    sideMargin={spacing.viewportHeight}
  >
    <Board />
  </PageContainer>
))`
  padding: 0 ${spacing.viewportHeight};

  margin-top: ${spacing.viewportHeight};
  margin-bottom: ${spacing.viewportHeight};

  @media screen and (${spacing.tabletMaxWidth}) {
    padding: 0 calc(${spacing.viewportHeight} / 2);

    margin-top: calc(${spacing.viewportHeight} / 2);
    margin-bottom: calc(${spacing.viewportHeight} / 2);
  }
`

export default App
