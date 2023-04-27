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

const viewportHeight = '10vh'
export const spacing = {
  viewportHeight,
  mobileMaxWidth: `max-width: calc(${breakpoint.mobile} + ${maxScrollbarWidth})`,
  tabletMaxWidth: `max-width: calc(${breakpoint.tablet} + ${maxScrollbarWidth})`,
}
