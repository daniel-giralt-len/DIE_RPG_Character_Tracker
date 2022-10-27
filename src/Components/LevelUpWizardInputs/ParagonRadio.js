import paragons from '../../data/paragons.json'
import RadioInput from '../RadioInput'
import SectionTitle from '../SectionTitle'

const ParagonRadio = ({
    isValid,
    selectedParagon,
    onParagonChange,
    translate
}) => {
    return (
    <div>
        <SectionTitle error={!isValid}>
            {translate('select your paragon:').toUpperCase()}
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