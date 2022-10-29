import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import styled, { createGlobalStyle } from 'styled-components'

import Configuration from './Components/Configuration'
import CharacterSheet from './Components/CharacterSheet'
import LevelUpWizard from './Components/LevelUpWizard'
import accumulateLevelData from './data/accumulateLevelData'
import getTranslator from './translations/getTranslator'

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

  const [selectedLevel, setSelectedLevel] = useState(1)
  const [accumulatedLevelData, setAccumulatedLevelData] = useState(accumulateLevelData(character, selectedLevel))

  const translate = getTranslator(language)

  const handleNewCharacter = level1Data => {
    setCookie('character', {
      levels: [
        level1Data
      ],
      nLevel: 1,
      selectedAdvancementsIds: [1]
    })
  }
  const handleDeleteCharacter = () => setCookie('character', {})

  useEffect(() => {
    setAccumulatedLevelData(accumulateLevelData(character, selectedLevel))
  }, [character, selectedLevel])

  console.log(accumulatedLevelData);

  const isWizardOpen = !character.nLevel

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
                ? (<LevelUpWizard
                    nLevel={1}
                    translate={translate}
                    onFinishWizard={handleNewCharacter}
                  />)
                : (<CharacterSheet
                  {...accumulatedLevelData}
                  translate={translate}
                />)
            }
          </MainWrapper>
        </Centerer>
      </div>
    </>
  )
};

export default App;
