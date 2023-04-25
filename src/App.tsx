import { PageContainer as Container } from 'lugo'
import { breakpoint, space } from './style/theme'

const App = () => (
  <Container maxWidth={breakpoint.laptop} sideMargin={space.sideMargin}>
    <h1>Hello</h1>
  </Container>
)

export default App
