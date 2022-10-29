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
  
  const [wizardLevel, setWizardLevel] = useState(1)
  const [isWizardOpen, setWizardOpen] = useState(!character.nLevel ? true : false)

  const translate = getTranslator(language)

  const handleNewCharacter = levelData => {
    const newCharacter = {
      levels: [
        ...character.levels||[],
        levelData
      ],
      nLevel: wizardLevel,
      selectedAdvancementsIds: [1]
    }
    const newLevel = 1
    setCookie('character', newCharacter)
    setSelectedLevel(newLevel)
    setAccumulatedLevelData(accumulateLevelData(newCharacter, newLevel))

    setWizardOpen(false)
  }
  const handleDeleteCharacter = () => {
    setCookie('character', {})
    setWizardLevel(1)
    setWizardOpen(true)
  }
  const handleOpenWizard = () => {
    setWizardLevel(character.nLevel + 1)
    setWizardOpen(true)
  }
  const handleCloseWizard = () => setWizardOpen(false)
  const handleLevelSelect = n => setSelectedLevel(n)

  useEffect(() => {
    setAccumulatedLevelData(accumulateLevelData(character, selectedLevel))
  }, [character, selectedLevel])

  console.log(accumulatedLevelData)

  return (
    <>
      <GlobalStyle/>
      <div>
        <Centerer>
          <header>
            <Configuration
              characterLevel={character.nLevel || 0}
              selectedLanguage={language}
              onDeleteCharacter={handleDeleteCharacter}
              onLanguageChange={newLanguage => setCookie('language', newLanguage)}
              onLevelUp={handleOpenWizard}
              onLevelSelect={handleLevelSelect}
              translate={translate}
            />
          </header>
          <MainWrapper>
            {
              isWizardOpen 
                ? (<LevelUpWizard
                    characterData={character}
                    nLevel={wizardLevel}
                    translate={translate}
                    onFinishWizard={handleNewCharacter}
                    onCloseWizard={handleCloseWizard}
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
