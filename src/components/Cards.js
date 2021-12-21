import React from 'react'
import styled from 'styled-components'
import QuestionMark from '../assests/images/QuestionMark.jpeg'

const Cards = (props) => {
  const {
    CARDS_DATA,
    matchedCards,
    handleSelection,
    firstSelectedCard,
    secondSelectedCard,
  } = props

  const handleClick = (e) => {
    const value = e.target.dataset['value']
    handleSelection(value)
  }

  return (
    <CardsContainer>
      {CARDS_DATA.map((card, index) => (
        <Card key={index}>
          {!matchedCards.includes(card.value) && (
            <>
              {firstSelectedCard === card.value ||
              secondSelectedCard === card.value ? (
                <img
                  onClick={handleClick}
                  src={card.image_url}
                  alt={card.value}
                  data-value={card.value}
                />
              ) : (
                <img
                  onClick={handleClick}
                  src={QuestionMark}
                  alt={card.value}
                  data-value={card.value}
                />
              )}
            </>
          )}
        </Card>
      ))}
    </CardsContainer>
  )
}

export default React.memo(Cards)

const CardsContainer = styled.div`
  padding: 15px 120px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  gap: 10px;
`

const Card = styled.div`
  width: 130px;
  height: 100px;
  border-radius: 5px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    border: 4px solid tomato;
  }

  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`
