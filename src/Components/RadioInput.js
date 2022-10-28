import React from 'react'
import { Button } from './sharedComponents'

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
                        <Button
                            as='label'
                            htmlFor={key}
                            selected={isSelected}
                        >
                            {`${isSelected ? '> ': ''}${translate(key)}`}
                        </Button>
                    </React.Fragment>)
            }
        )}            
        </div>
    )
}

export default RadioInput