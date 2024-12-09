import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Hand } from "pokersolver";
import clock from "../../../assets/images/clock.png";
import styled from "styled-components";
import { Button } from "reactstrap";
import GameOverScreen from "../../components/GameOver";
import { generateHand, shuffleArray } from "../../utils/gameUtils";
import { HAND_RANKS } from "../../../constants/Game";
import P from "../../components/Typograph/P";
import { Colors } from "../../../constants";
import { useTranslation } from "react-i18next";

const Game: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [timeLeft, setTimeLeft] = useState(100);
  const [score, setScore] = useState(0);
  const [language, setLanguage] = useState("en");
  const [hand, setHand] = useState<string[]>([]);
  const [correctAnswer, setCorrectAnswer] = useState<string>("");
  const [options, setOptions] = useState<string[]>([]);
  const [funnyMessage, setFunnyMessage] = useState<string>("");
  const [previousScores, setPreviousScores] = useState<number[]>([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef(new Audio("/audio/kenny.mp3"));

  // Start a new round
  const startNewRound = () => {
    const newHand = generateHand();
    const solvedHand = Hand.solve(newHand);
    const correctRank = solvedHand.name;

    // Generate fake options excluding the correct rank
    const fakeOptions = shuffleArray(
      HAND_RANKS.filter((rank) => rank !== correctRank)
    ).slice(0, 2);

    // Ensure hand, correct answer, and options are properly set
    setHand(newHand);
    setCorrectAnswer(correctRank);
    setOptions(shuffleArray([correctRank, ...fakeOptions]));
  };

  // Handle answer selection
  const handleAnswer = (answer: string) => {
    if (answer === correctAnswer) {
      setScore((prev) => prev + 1);
      setTimeLeft((prev) => prev + 5);
    }
    fetchFunnyMessage();
    startNewRound();
  };

  // Fetch funny message
  const fetchFunnyMessage = async () => {
    try {
      const { data } = await axios.get(
        "https://api.api-ninjas.com/v1/randomword",
        { headers: { "X-Api-Key": "gXV/uKdoBxte5b2UNz84sQ==VUwINO5ajXPXXumW" } }
      );
      setFunnyMessage(`Did you know? ${data.word} is a cool word!`);
    } catch {
      setFunnyMessage("Couldn't fetch a funny message this time!");
    }
  };

  // End the game
  const endGame = () => {
    setIsGameOver(true);
    setPreviousScores((prev) => [...prev, score]);
  };

  // Restart the game
  const restartGame = () => {
    setScore(0);
    setTimeLeft(100);
    setIsGameOver(false);
    setFunnyMessage("");
    startNewRound();
  };

  // Timer effect
  useEffect(() => {
    if (timeLeft > 0 && !isGameOver) {
      const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
    if (timeLeft <= 0) endGame();
  }, [timeLeft, isGameOver]);

  // Start the first round on mount
  useEffect(() => {
    startNewRound();
  }, []);

  // Music play/pause logic
  useEffect(() => {
    const audio = audioRef.current;
    if (isMusicPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
    return () => audio.pause();
  }, [isMusicPlaying]);

  // Language switcher
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setLanguage(language);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      {!isGameOver && (
        <Div>
          <Button
            active={language === "en"}
            onClick={() => changeLanguage("en")}
            outline
          >
            English
          </Button>
          <Button
            active={language === "cz"}
            onClick={() => changeLanguage("cz")}
            outline
          >
            Czech
          </Button>
        </Div>
      )}

      {isGameOver ? (
        <GameOverScreen
          score={score}
          previousScores={previousScores}
          restartGame={restartGame}
        />
      ) : (
        <div>
          <h1>{t("Guess the Cards")}</h1>
          <Timer>
            <span>
              <Image src={clock} alt="Clock" />
            </span>
            <span className="time_left">{timeLeft} secs</span>
          </Timer>
          <Score>
            {t("Score")}: {score}
          </Score>
          <GameCardWrapper>
            <h2>{t("Your Hand")}</h2>
            <div style={{ fontSize: "24px" }} className="game_card">
              {hand.map((card, index) => (
                <span
                  key={index}
                  style={{ margin: "5px" }}
                  className="suits_cards"
                >
                  {card}
                </span>
              ))}
            </div>
          </GameCardWrapper>
          <div>
            <h2>{t("What is the hand ranking?")}</h2>
            {options.map((option, index) => (
              <Btn
                key={index}
                onClick={() => handleAnswer(option)}
                style={{ margin: "10px" }}
              >
                {option}
              </Btn>
            ))}
          </div>
          {funnyMessage && <P>{funnyMessage}</P>}

          <Button
            onClick={() => setIsMusicPlaying(!isMusicPlaying)}
            style={{ marginTop: "20px" }}
          >
            {isMusicPlaying ? t("Pause Music") : t("Play Music")}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Game;

const Timer = styled.div`
  display: flex;
  flex-direction: column;

  .time_left {
    font-size: 3rem;
  }
`;

export const Btn = styled(Button)`
  width: 100px;
  padding: 0.5rem;
  color: #ffffff;
  border-radius: 4px;
  background-color: ${Colors.PRIMARY};
  font-size: 1rem;
  box-shadow: 0 1px 30px 1px rgba(0, 0, 0, 0.11);
`;

const GameCardWrapper = styled.div`
  width: fit-content;
  min-width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .game_card {
    margin-bottom: 1rem;
  }
`;

const Score = styled.div`
  border: 1px solid red;
  width: 50%;
  margin: auto;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  color: ${Colors.PRIMARY};
  border-radius: 4px;
  font-size: 2rem;
  box-shadow: 0 1px 30px 1px rgba(0, 0, 0, 0.11);
`;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  margin: auto;
  margin-bottom: 1rem;
`;

const Image = styled.img`
  width: 30px;
  height: 30px;
`;
