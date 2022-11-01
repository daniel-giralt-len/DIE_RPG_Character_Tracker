import styled from 'styled-components'
import { useState } from 'react'
import { TextInput } from '../sharedComponents'

const OtherChoice = styled(TextInput)`
    font-size: 1em;
    margin: 0;
    padding: 0;

    width: auto; 
`

const ChoicesList = ({
    choices,
    nChoices = 1,
    onSelectChoice,
    selected = [],
    translate
}) => {
    const selectedIds = selected.map(s=>s.id)
    const [otherText, setOtherText] = useState((selected||{}).value || '')
    const handleSelectChoice = id => {
        const selectionObject = id === 'OTHER' ? {id, value: otherText} : {id}
        let newSelectedArray = [selectionObject]
        if(nChoices > 1){
            newSelectedArray = [...selected]
            if(newSelectedArray.length >= nChoices){
                newSelectedArray.splice(0,1)
            }
            newSelectedArray.push(selectionObject)
        }
        return onSelectChoice(newSelectedArray)
    }
    const handleOtherChange = text => {
        setOtherText(text)
        if(selected.id === 'OTHER'){
            onSelectChoice({id:selected.id, value: text})
        }
    }

    return (
        <div>
            {nChoices > 1 && (<div>Pick {nChoices}:</div>)}
            <div>
                {choices.map(c => {
                    let id = typeof c === 'object' ? c.id : c
                    const isSelected = selectedIds.includes(id)

                    return (<div key={id}>
                        <input
                            type='radio'
                            name={id}
                            id={id}
                            checked={isSelected}
                            onChange={() => handleSelectChoice(id)}
                        />
                        { id !== 'OTHER'
                        ? (<label
                            htmlFor={id}
                        >
                            {translate(id)}
                        </label>)
                        : (<OtherChoice
                            htmlFor={id}
                            onChange={e => handleOtherChange(e.target.value)}
                            rows={1}
                            value={otherText}
                            placeholder={translate('something else')}
                        />)}
                    </div>)
                })}
            </div>
        </div>
    )
}
export default ChoicesList