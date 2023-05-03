import styled from 'styled-components'
import { color } from './theme'

const Header = styled.h2<{ withShadow?: boolean }>`
  font-size: 2rem;
  font-weight: bold;
  ${({ withShadow }) =>
    withShadow && `text-shadow: 1px 1px 8px ${color.primary};`}
`

export default Header
