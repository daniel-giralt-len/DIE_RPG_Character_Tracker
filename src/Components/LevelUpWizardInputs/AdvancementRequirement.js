import EmotionFlower from '../EmotionFlower'

const AdvancementRequirement = ({
    onAdvancementRequirementSelect,
    selectedRequirement,
    type,
    translate,
}) => {
    if(type==='emotion'){
        return (<EmotionFlower
            onPetalClick={onAdvancementRequirementSelect}
            translate={translate}
            selected={selectedRequirement}
        />)
    }
}
export default AdvancementRequirement