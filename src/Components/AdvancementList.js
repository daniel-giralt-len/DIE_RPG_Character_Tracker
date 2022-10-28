import styled from 'styled-components'

import advancementsDb from '../data/advancementsDb'

import { SectionTitle } from './sharedComponents'
import AdvancementRequirement from './LevelUpWizardInputs/AdvancementRequirement'

const ListItemWrapper = styled.li`
    list-style-type: disclosure-closed;
    margin-bottom: 1em;
`

const AdvancementList = ({
    editable,
    nLevel,
    onAdvancementRequirementSelect,
    paragon,
    requirements = {},
    translate
}) => {
    const levelAdvancements = advancementsDb[paragon].positions[nLevel]
    console.log(requirements)
    const changeAdvancementRequirement = (id,v) => {
        onAdvancementRequirementSelect({
            ...requirements,
            [id]: v
        })
    }
    return (
        <div>
            <SectionTitle>
                {`${translate('advancements').toUpperCase()}`}
            </SectionTitle>
            <ul>
                {levelAdvancements.map(id => {
                    const data = advancementsDb[paragon].db[id]
                    return (<ListItemWrapper key={id}>
                                <div>{translate(id)}</div>
                                {data.selector && (<AdvancementRequirement
                                    editable={editable}
                                    onAdvancementRequirementSelect={v => changeAdvancementRequirement(id, v)}
                                    type={data.selector}
                                    selected={requirements[id]}
                                    translate={translate}
                                />)}
                            </ListItemWrapper>)
                    })                
                }
            </ul>
        </div>
        )
}
export default AdvancementList