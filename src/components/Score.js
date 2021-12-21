import React from "react";
import styled from "styled-components";

const Score = ({ turn, matches }) => {
  return (
    <ScoreContainer>
      <div className="matches">
        <h2>Matches: {matches}</h2>
      </div>
      <div className="clicked">
        <h2>Turns: {turn}</h2>
      </div>
    </ScoreContainer>
  );
};

export default Score;

const ScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 800px;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: wheat;
  border-radius: 15px;
  margin-top: 10px;
`;
