import EmotionFlower from '../EmotionFlower'
import getEmotionPetalText from '../../data/getEmotionPetalText'

const AdvancementRequirement = ({
    editable,
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
    }else{
        if(type==='emotion'){
            console.log(selected)
            return (<div>
                {getEmotionPetalText(selected, translate)}
            </div>)
        }
    }
}
export default AdvancementRequirement