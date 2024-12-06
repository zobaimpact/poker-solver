import React from "react";
import Card from "../../components/Card";
import pokerImg from "../../../assets/images/poker.png";
import {Game} from "../game/loadable";
import { useGameContext } from "../../context/GameContext";

const HomePage: React.FC = () => {
  const { isPlayMode, togglePlayMode } = useGameContext();

  return (
    <>
      {!isPlayMode && (
        <Card
          image={pokerImg}
          title="Guess the card"
          width="auto"
          margin="1rem"
          height="60%"
          buttonText="PLAY"
          minWidth="300px"
          onButtonClick={togglePlayMode}
        />
      )}

      {isPlayMode && (
        <Card width="auto" margin="1rem" height="auto" minWidth="300px">
          <Game />
        </Card>
      )}
    </>
  );
};

export default HomePage;

