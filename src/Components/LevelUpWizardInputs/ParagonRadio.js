import paragons from '../../data/paragons.json'
import RadioInput from '../RadioInput'

const ParagonRadio = ({
    selectedParagon,
    onParagonChange,
    translate
}) => {
    return (
    <div>
        <h4>{translate ('select your paragon:')}</h4>
        <RadioInput
            options={Object.keys(paragons)}
            onOptionChange={onParagonChange}
            selectedOption={selectedParagon}
            translate={translate}
        />
    </div>
    )
}
export default ParagonRadio