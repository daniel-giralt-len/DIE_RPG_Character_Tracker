import Stat from './Components/Stat'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Minion Pro";
    src: url(MinionPro-Medium.otf) format("opentype");
    font-weight: normal;
  }
  @font-face {
    font-family: "Minion Pro";
    src: url(MinionPro-BoldCnCapt.otf) format("opentype");
    font-weight: bold;
  }
  html, button, input, textarea {
    font-family: 'Minion Pro', sans-serif;
    font-size: 1.5em;
  }
`;

const App = () => (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,500;0,700;0,900;1,200;1,500;1,700&display=swap" rel="stylesheet"></link>
    <GlobalStyle/>
      <div>
        <div>Font Testing String</div>
        <Stat value={4} paragon='dictator' />
        <Stat value={4} paragon='fool' />
        <Stat value={4} paragon='emotion knight' />
        <Stat value={4} paragon='neo' />
        <Stat value={4} paragon='godbinder' />
        <Stat value={4} paragon='master' />
      </div>
    </>
 );

export default App;
