import Stat from './Components/Stat'
import { createGlobalStyle } from 'styled-components'
import getTranslator from './translations/getTranslator'
import AdvancementTree from './Components/AdvancementTree';
import EmotionFlower from './Components/EmotionFlower';

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
    font-size: 1em;
  }
`;

const App = () => {
  const translate = getTranslator('en')
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,500;0,700;0,900;1,200;1,500;1,700&display=swap" rel="stylesheet"></link>
      <GlobalStyle/>
      <div>
        <EmotionFlower translate={translate} />
      </div>
    </>
  )
};

export default App;
