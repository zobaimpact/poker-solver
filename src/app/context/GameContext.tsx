import React, { createContext, useContext, useState, ReactNode } from "react";

interface GameContextProps {
  isPlayMode: boolean;
  togglePlayMode: () => void;
}

const GameContext = createContext<GameContextProps | undefined>(undefined);

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isPlayMode, setIsPlayMode] = useState(false);

  const togglePlayMode = () => setIsPlayMode((prev) => !prev);

  return (
    <GameContext.Provider value={{ isPlayMode, togglePlayMode }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = (): GameContextProps => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGameContext must be used within a GameProvider");
  }
  return context;
};
