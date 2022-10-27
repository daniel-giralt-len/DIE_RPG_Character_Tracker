import { useState } from 'react'
import styled from 'styled-components'

import RadioInput from './RadioInput'

import webTranslations from '../translations/translations'

const Button = styled.button`
    font-size: 0.75em;
    border: 0.1em solid black;
    margin: 0.25em;
    padding: 0.1em;
    background: #fff;
    &:hover{
        background: grey;
    }
`

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
            <Button onClick={toggleHidden}>
                {hidden?'vv':'^^'}
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