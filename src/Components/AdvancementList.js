import styled from 'styled-components'

import { getAdvancementsData } from '../data/advancementsDb'

import { SectionTitle } from './sharedComponents'
import AdvancementRequirement from './LevelUpWizardInputs/AdvancementRequirement'

const ListItemWrapper = styled.li`
    list-style-type: disclosure-closed;
    margin-bottom: 1em;
`

const AdvancementList = ({
    editable,
    advancementPositions,
    onAdvancementRequirementSelect,
    paragon,
    requirements = {},
    translate
}) => {
    const levelAdvancements = getAdvancementsData({
        positions: advancementPositions,
        paragon
    })
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
                {levelAdvancements.map(({id, selector}) => {
                    return (<ListItemWrapper key={id}>
                                <div>{translate(id)}</div>
                                {selector && (<AdvancementRequirement
                                    editable={editable}
                                    onAdvancementRequirementSelect={v => changeAdvancementRequirement(id, v)}
                                    type={selector}
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