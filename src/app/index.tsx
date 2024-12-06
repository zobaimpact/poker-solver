import { GlobalStyle } from "../styles/global-styles";
import { MainWrapper } from "./layouts/MainWrapper";
import { HomePage } from "./pages/home/loadable";
import "bootstrap/dist/css/bootstrap.min.css";
import { GameProvider } from "./context/GameContext";

const App: React.FC = () => {
  return (
    <GameProvider>
      <MainWrapper>
        <HomePage />
        <GlobalStyle />
      </MainWrapper>
    </GameProvider>
  );
};

export default App;
