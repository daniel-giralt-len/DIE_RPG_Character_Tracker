import { TextInput } from '../sharedComponents'

const ChoicesList = ({
    choices,
    nChoices = 1,
    onSelectChoice,
    selected,
    translate
}) => {
    return (
        <div>
            {nChoices > 1 && (<div>Pick {nChoices}:</div>)}
            <ul>
                {choices.map(c => {
                    if(typeof c === 'object'){
                        return (<li>{c.id}</li>)
                    }
                    if(c === 'OTHER'){
                        <TextInput
                            onChange={e => (e.target.value)}
                            rows={1}
                            value={''}
                            placeholder={translate('something else')}
                        />
                    }
                    return (<li>{c}</li>)
                })}
            </ul>
    </div>
    )
}
export default ChoicesList