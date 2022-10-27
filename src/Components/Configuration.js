import styled from 'styled-components'
import webTranslations from '../translations/translations'
import RadioInput from './RadioInput'

const LanguageButton = styled.label`
    border: 0.1em solid black;
    border-radius: 0.75em;
    margin: 0.25em;
    padding: 0.1em;
    ${({selected})=>selected
        ? 'background-color: #dbdbdb;'
        : ''}
`

const Configuration = ({
    selectedLanguage,
    onLanguageChange,
    translate
}) => {
    const languages = Object.keys(webTranslations['*'])

    return (
        <div>
            <RadioInput 
                options={languages}
                onOptionChange={onLanguageChange}
                selectedOption={selectedLanguage}
                translate={translate}
            />       
        </div>
    )
}

export default Configuration