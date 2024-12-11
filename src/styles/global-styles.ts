import { createGlobalStyle } from "styled-components";
import { Colors } from "../constants";
import { normalize } from "./normalize";

export const GlobalStyle = createGlobalStyle`
${normalize}
    html {
        font-size: 62.5%;
        font-family: 'Aeonik','DM Sans', 'Roboto', 'sans-sefif';
    }

    #webpack-dev-server-client-overlay-div,
    #webpack-dev-server-client-overlay {
        display: none;
    }

    *, *:before, *:after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }

    body {
        margin: 0;
        padding: 0;
        max-width: 100vw;
        max-height: 100vh;
        background-color: #ffffff;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */

        &::-webkit-scrollbar {
            width: 0;
        }
    }

    .suits_cards{
      width: 100px !important;
      height: 80px !important;
      background: red;
      padding: 0.5rem;
      border-radius: 4px;
      color: white;
    }

    a {
        color: inherit;
        transition: all 0.3s;
        text-decoration: none;

        &:hover {
            text-decoration: none;
        }
    }

    img {
        width: 100%;
        height: 100%;
    }

    .scroll {
        .scrollbar-track {
            background: transparent;

            &.scrollbar-track-y {
                width: 4px;
            }
        }

        .scrollbar-thumb {
            opacity: 0.5;
            transition: height 0.3s;
            cursor: pointer;
        }
    }

    .music_effect{
      width: 100%;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }


    *::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }

    *::-webkit-scrollbar {
        width: 3px;
    }

    *::-webkit-scrollbar-track {
        background: transparent;
        opacity: 0.5;
        border-radius: 10px;
    }

    *::-webkit-scrollbar-thumb {
        background: ${Colors.PRIMARY};
        border-radius: 10px;
    }

    *::-webkit-scrollbar-thumb:hover {
        width: 5px;
        height: 5px;
        background: ${Colors.PURPLE700};
    }
    p, span, button, input, label, div, h1, h2, h3, h4, h5, h6 {
        font-family: "Aeonik" !important;
    }
   .wrapper{
     background: #ffffff;
     height: 100vh;
     display: flex;
     align-items: center;
     justify-content: center;
        
    }

    // Music bars css

    .music-bars {
  display: flex;
  gap: 5px;
}

.bar {
  width: 10px;
  height: 10px;
  background: linear-gradient(180deg, #ff0066, #ffcc00);
  animation: bounce 1s infinite ease-in-out;
}

.bar:nth-child(2) {
  animation-delay: 0.2s;
}

.bar:nth-child(3) {
  animation-delay: 0.4s;
}

.bar:nth-child(4) {
  animation-delay: 0.6s;
}

.bar:nth-child(5) {
  animation-delay: 0.8s;
}

@keyframes bounce {
  0%, 100% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(2.5);
  }
}


`;
