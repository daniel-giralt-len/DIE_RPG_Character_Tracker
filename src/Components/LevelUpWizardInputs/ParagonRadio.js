import paragons from '../../data/paragons.json'
import RadioInput from '../RadioInput'
import { SectionTitle } from '../sharedComponents'

const ParagonRadio = ({
    hasError,
    selectedParagon,
    onParagonChange,
    translate
}) => {
    return (
    <div>
        <SectionTitle error={hasError}>
            {translate('select your paragon:').toUpperCase()}
        </SectionTitle>
        <RadioInput
            groupName='paragon'
            options={Object.keys(paragons)}
            onOptionChange={onParagonChange}
            selectedOption={selectedParagon}
            translate={translate}
        />
    </div>
    )
}
export default ParagonRadio