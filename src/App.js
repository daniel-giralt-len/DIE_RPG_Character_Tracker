import { useCookies } from 'react-cookie'
import styled, { createGlobalStyle } from 'styled-components'

import getTranslator from './translations/getTranslator'
import Configuration from './Components/Configuration'
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

  const handleNewCharacter = character => setCookie('character', {
    ...character,
    levels: {},
    nLevel: 1,
    selectedAdvancementsIds: [1]
  })
  const handleDeleteCharacter = () => setCookie('character', {})

  const isWizardOpen = character.paragon

  return (
    <>
      <GlobalStyle/>
      <div>
        <Centerer>
          <header>
            <Configuration
              selectedLanguage={language}
              onDeleteCharacter={handleDeleteCharacter}
              onLanguageChange={newLanguage => setCookie('language', newLanguage)}
              translate={translate}
            />
          </header>
          <MainWrapper>
            {
              isWizardOpen 
                ? (<CharacterSheet
                    {...character}
                    translate={translate}
                  />)
                : (<LevelUpWizard
                    nLevel={1}
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
