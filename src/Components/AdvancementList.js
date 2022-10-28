import styled from 'styled-components'

import advancementsDb from '../data/advancementsDb'

import { SectionTitle } from './sharedComponents'
import AdvancementRequirement from './LevelUpWizardInputs/AdvancementRequirement'

const ListItemWrapper = styled.li`list-style-type: disclosure-closed;`

const AdvancementList = ({
    advancements,
    translate
}) => {
    return (
        <div>
            <SectionTitle>
                {`${translate('advancements').toUpperCase()}`}
            </SectionTitle>
            <ul>
                {advancements.map(title => (<ListItemWrapper key={title}>{translate(title)}</ListItemWrapper>))}
                {levelAdvancements
                .filter(id=>advancementsDb[form.paragon].db[id].selector)
                .map(id => (<AdvancementRequirement
                        key={id}
                        onAdvancementRequirementSelect={handleAdvancementRequirementSelect}
                        selected={-1}
                        type={advancementsDb[form.paragon].db[id].selector}
                        translate={translate}
                    />)
                )
            }
            </ul>
        </div>
        )
}
export default AdvancementList