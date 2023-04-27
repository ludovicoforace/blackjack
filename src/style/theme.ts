import { maxScrollbarWidth } from 'lugo'

export const color = {
  primary: '#fd7e2d',
}

export const background = {
  primary: '#2a2a2e',
  secondary: '#38383d',
}

export const breakpoint = {
  smallestDevice: '280px',
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
}

const sideMargin = '4rem'
export const spacing = {
  sideMargin,
  mobileMaxWidth: `max-width: calc(${breakpoint.mobile} + ${maxScrollbarWidth} + ${sideMargin} * 2)`,
  tabletMaxWidth: `max-width: calc(${breakpoint.tablet} + ${maxScrollbarWidth} + ${sideMargin} * 2)`,
}
