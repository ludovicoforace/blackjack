import type { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { PokerCard } from 'lugo'
import Header from '../../style/Header'

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.3rem;
  margin: 1rem 0;
`

const Player = styled((props: HTMLAttributes<HTMLDivElement>) => (
  <div {...props}>
    <Header>Player: 9 points</Header>
    <CardsWrapper>
      <PokerCard />
      <PokerCard suit="hearts" rank="Q" />
      <PokerCard suit="spades" rank="J" />
    </CardsWrapper>
  </div>
))`
  text-align: center;
`

export default Player
