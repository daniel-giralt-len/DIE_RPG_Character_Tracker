import React from 'react'
import styled from 'styled-components'

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
                return (<React.Fragment key={key}>
                        <input
                            type='radio'
                            name='language'
                            id={key}
                            checked={isSelected}
                            onChange={() => onOptionChange(key)}
                            hidden
                        />
                        <LabelWrapper
                            htmlFor={key}
                            selected={isSelected}
                        >
                            {`${isSelected ? '> ': ''}${translate(key)}`}
                        </LabelWrapper>
                    </React.Fragment>)
            }
        )}            
        </div>
    )
}

export default RadioInput