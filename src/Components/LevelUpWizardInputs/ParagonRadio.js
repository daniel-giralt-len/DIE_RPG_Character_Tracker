import paragons from '../../data/paragons.json'
import RadioInput from '../RadioInput'
import SectionTitle from '../SectionTitle'

const ParagonRadio = ({
    selectedParagon,
    onParagonChange,
    translate
}) => {
    return (
    <div>
        <SectionTitle>
            {translate ('select your paragon:')}
        </SectionTitle>
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