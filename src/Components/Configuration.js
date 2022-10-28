import { useState } from 'react'
import styled from 'styled-components'

import { Button } from './sharedComponents'
import RadioInput from './RadioInput'

import webTranslations from '../translations/translations'

const ConfigurationWrapper = styled.div`
    display: flex;
    flex-direction: column
`

const Configuration = ({
    selectedLanguage,
    onLanguageChange,
    translate
}) => {
    const [hidden, setHidden] = useState(true)
    const languages = Object.keys(webTranslations['*'])

    const toggleHidden = () => setHidden(!hidden)

    return (
        <ConfigurationWrapper>
            <Button onClick={toggleHidden} selected={!hidden}>
                ⚙️
            </Button>
            {
                !hidden && (
                    <RadioInput 
                        options={languages}
                        onOptionChange={onLanguageChange}
                        selectedOption={selectedLanguage}
                        translate={translate}
                    />       
                )
            }
        </ConfigurationWrapper>
    )
}

export default Configuration