import { useCookies } from 'react-cookie'
import styled, { createGlobalStyle } from 'styled-components'

import Stat from './Components/Stat'
import getTranslator from './translations/getTranslator'
import AdvancementTree from './Components/AdvancementTree'
import Configuration from './Components/Configuration'
import EmotionFlower from './Components/EmotionFlower'
import CharacterSheet from './Components/CharacterSheet'
import LevelUpWizard from './Components/LevelUpWizard'

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
    font-size: 1.15em;
  }
`;

const Centerer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MainWrapper = styled.main`
  max-width: 600px;
  
`

const App = () => {
  const [cookies, setCookie] = useCookies(['language', 'character'])
  const {language, character} = cookies

  if(!language) setCookie('language', 'en')
  if(!character) setCookie('character', {})
  const translate = getTranslator(language)

  const handleNewCharacter = character => setCookie('character', { ...character, levels: {} })

  return (
    <>
      <GlobalStyle/>
      <div>
        <Centerer>
          <header>
            <Configuration
              selectedLanguage={language}
              onLanguageChange={newLanguage => setCookie('language', newLanguage)}
              translate={translate}
            />
          </header>
          <MainWrapper>
            {
              character.paragon 
                ? (<CharacterSheet
                    {...character}
                    translate={translate}
                  />)
                : (<LevelUpWizard
                    nLevel={0}
                    translate={translate}
                    onFinishWizard={handleNewCharacter}
                  />)
            }
          </MainWrapper>
        </Centerer>
      </div>
    </>
  )
};

export default App;
