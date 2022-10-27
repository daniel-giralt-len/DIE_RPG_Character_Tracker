import styled from 'styled-components'
import webTranslations from '../translations/translations'

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
}) => {
    const languages = Object.keys(webTranslations['*'])

    return (
        <div>
        {languages.map(key => {
                const isSelected = key===selectedLanguage
                return (<>
                        <input
                            type='radio'
                            name='language'
                            id={key}
                            key={key}
                            checked={isSelected}
                            onClick={() => onLanguageChange(key)}
                            hidden
                        />
                        <LanguageButton
                            for={key}
                            selected={isSelected}
                        >
                            {`${isSelected ? '>': ''}${webTranslations['*'][key]}`}
                        </LanguageButton>
                    </>)
            }
        )}            
        </div>
    )
}

export default Configuration