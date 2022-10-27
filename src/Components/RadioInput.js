import styled from 'styled-components'
import webTranslations from '../translations/translations'

const LabelWrapper = styled.label`
    border: 0.1em solid black;
    border-radius: 0.75em;
    margin: 0.25em;
    padding: 0.1em;
    ${({selected})=>selected
        ? 'background-color: #dbdbdb;'
        : ''}
`

const RadioInput = ({
    options,
    onOptionChange,
    selectedOption,
    translate
}) => {
    return (
        <div>
        {options.map(key => {
                const isSelected = key===selectedOption
                return (<>
                        <input
                            type='radio'
                            name='language'
                            id={key}
                            key={key}
                            checked={isSelected}
                            onClick={() => onOptionChange(key)}
                            hidden
                        />
                        <LabelWrapper
                            for={key}
                            selected={isSelected}
                        >
                            {`${isSelected ? '> ': ''}${translate(key)}`}
                        </LabelWrapper>
                    </>)
            }
        )}            
        </div>
    )
}

export default RadioInput