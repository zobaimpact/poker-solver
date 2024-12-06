import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";  
interface GameOverScreenProps {
  score: number;
  previousScores: number[];
  restartGame: () => void;
}

const GameOverScreen: React.FC<GameOverScreenProps> = ({
  score,
  previousScores,
  restartGame,
}) => {
  return (
    <div>
      <h1>Leaderboard</h1>
      <p>Your Score: {score}</p>
      <h2>Previous Attempts</h2>
      <ul>
        {previousScores.map((score, index) => (
          <List key={index}>
            Attempt {index + 1}: {score} Answers
          </List>
        ))}
      </ul>
      <Btn onClick={restartGame}>Play Again</Btn>
    </div>
  );
};

export default GameOverScreen;

const List = styled.li`
  list-style: none;
  font-size: 1.5rem;
`;

const Btn = styled(Button)`
  width: 100%;
  height: 40px;
  background-color: #ffffff;
  color: red;
  box-shadow: 0 1px 30px 1px rgba(0, 0, 0, 0.11);
  border: 1px solid red;
  margin-top: 20px;
  font-size: 1.2rem;
  border-radius: 4px;
`;
