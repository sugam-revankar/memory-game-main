import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Cards from "./Cards";
import Score from "./Score";

import { CARDS_DATA } from "../Data/Data";

const initialConfiguration = {
  isFirstSelected: false,
  firstSelectedCard: "",
  secondSelectedCard: "",
  matches: 0,
  turn: 0,
  isGameOver: false,
};

const Container = () => {
  const [configuration, setConfiguration] = useState(initialConfiguration);
  const [matchedCards, setMatchedCards] = useState([]);

  useEffect(() => {
    if (configuration.isGameOver) {
      const response = window.confirm("Wanna play again ?");
      if (response) {
        window.location.reload();
      } else {
        window.close();
      }
    }
  }, [configuration]);

  function sleep(delay) {
    return new Promise((resolve) => setTimeout(resolve, delay));
  }

  const handleSelection = async (selectedCardValue) => {
    if (!configuration.isFirstSelected) {
      configuration.isFirstSelected = true;
      configuration.firstSelectedCard = selectedCardValue;
      setConfiguration({ ...configuration });
    } else {
      configuration.secondSelectedCard = selectedCardValue;
      setConfiguration({ ...configuration });
      await sleep(800);

      if (configuration.firstSelectedCard !== selectedCardValue) {
        const result =
          configuration.firstSelectedCard.charAt(0) ===
          selectedCardValue.charAt(0);

        if (result) {
          if (matchedCards.length === 14) {
            configuration.isGameOver = true;
          }
          setMatchedCards([
            ...matchedCards,
            configuration.firstSelectedCard,
            selectedCardValue,
          ]);
          configuration.matches = configuration.matches + 1;
        }
        configuration.firstSelectedCard = "";
        configuration.secondSelectedCard = "";
        configuration.isFirstSelected = false;
        configuration.turn = configuration.turn + 1;
      }
      setConfiguration({ ...configuration });
      await sleep(1000);
    }
  };

  return (
    <>
      <Title>
        <h1>Memory Game</h1>
      </Title>
      <Score matches={configuration.matches} turn={configuration.turn} />
      <DivContainer>
        <Cards
          CARDS_DATA={CARDS_DATA}
          matchedCards={matchedCards}
          handleSelection={handleSelection}
          firstSelectedCard={configuration.firstSelectedCard}
          secondSelectedCard={configuration.secondSelectedCard}
        />
      </DivContainer>
    </>
  );
};

export default Container;

const Title = styled.div`
  text-align: center;
  width: 800px;
  background-color: grey;
  color: whitesmoke;
  padding: 10px;
  border-radius: 15px;
`;

const DivContainer = styled.div`
  width: 800px;
  height: 460px;
  margin-top: 10px;
`;
