import { useState } from 'react'
import styled from 'styled-components'

import { Button } from './sharedComponents'
import RadioInput from './RadioInput'

import webTranslations from '../translations/translations'

const ConfigurationWrapper = styled.div`
    ${({closed})=>closed ? '' : `display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
        "languages opener"
        "rest rest";`}
`

const OpenButton = styled(Button)`
    grid-area: opener;
`
const LanguagesSection = styled.div`
    grid-area: languages;
    display: flex;
    align-items: center;
    ${({hidden})=>hidden ? 'display: none;' : ''}
`
const RestSection = styled.div`
    grid-area: rest;
    ${({hidden})=>hidden ? 'display: none;' : ''}
`

const Configuration = ({
    selectedLanguage,
    onDeleteCharacter,
    onLanguageChange,
    translate
}) => {
    const [hidden, setHidden] = useState(true)
    const [aboutToDelete, setAboutToDelete] = useState(false)
    const languages = Object.keys(webTranslations['*'])

    const toggleHidden = () => setHidden(!hidden)
    const handleCharacterDelete = () => {
        if(aboutToDelete){
            setAboutToDelete(false)
            setHidden(true)
            return onDeleteCharacter()
        }
        setAboutToDelete(true)
    }

    return (
        <ConfigurationWrapper closed={hidden}>
            <OpenButton
                style={{gridArea: 'opener'}}
                onClick={toggleHidden}
                selected={!hidden}
                noBorder
            >
                ⚙️
            </OpenButton>
            <LanguagesSection hidden={hidden}>
                <RadioInput 
                    options={languages}
                    onOptionChange={onLanguageChange}
                    selectedOption={selectedLanguage}
                    translate={translate}
                />       
            </LanguagesSection>
            <RestSection hidden={hidden}>
                <Button onClick={handleCharacterDelete}>
                    {translate(aboutToDelete ? 'are you sure?' : 'delete character')}
                </Button>
            </RestSection>
        </ConfigurationWrapper>
    )
}

export default Configuration