import EmotionFlower from '../AdvancementInputs/EmotionFlower'
import ChoicesList from '../AdvancementInputs/ChoicesList'
import getEmotionPetalText from '../../data/getEmotionPetalText'

const AdvancementRequirement = ({
    choices = [],
    editable,
    nChoices,
    onAdvancementRequirementSelect,
    selected,
    type,
    translate,
}) => {
    if(editable){
        if(type==='emotion'){
            return (<EmotionFlower
                onPetalClick={onAdvancementRequirementSelect}
                translate={translate}
                selected={selected}
            />)
        }
        if(type==='choices'){
            return (<ChoicesList
                choices={choices}
                nChoices={nChoices}
                onSelectChoice={onAdvancementRequirementSelect}
                translate={translate}
                selected={selected}
            />)
        }
    }else{
        if(type==='emotion'){
            return (<div>
                {getEmotionPetalText(selected, translate)}
            </div>)
        }
        if(type==='choices'){
            return (<div>
                {selected.value ? selected.value : translate(selected.id)}
            </div>)
        }
    }
}
export default AdvancementRequirement