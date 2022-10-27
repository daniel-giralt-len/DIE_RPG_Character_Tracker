import Stat from './Components/Stat'
import { createGlobalStyle } from 'styled-components'
import getTranslator from './translations/getTranslator'
import AdvancementTree from './Components/AdvancementTree'
import Configuration from './Components/Configuration'
import EmotionFlower from './Components/EmotionFlower'
import CharacterSheet from './Components/CharacterSheet'
import LevelUpWizard from './Components/LevelUpWizard'
import { useCookies } from 'react-cookie'

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
  const [cookies, setCookie] = useCookies(['language', 'character'])
  const {language, character} = cookies

  if(!language) setCookie('language', 'en')
  if(!character) setCookie('character', {})
  const translate = getTranslator(language)
  return (
    <>
      <GlobalStyle/>
      <div>
        <header>
          <Configuration
            selectedLanguage={language}
            onLanguageChange={newLanguage => setCookie('language', newLanguage)}
            translate={translate}
          />
        </header>
        <main>
          {
            character.paragon 
              ? (<CharacterSheet
                  {...character}
                
                />)
              : (<LevelUpWizard
                  nLevel={0}
                  translate={translate}
                />)
          }
        </main>
      </div>
    </>
  )
};

export default App;
