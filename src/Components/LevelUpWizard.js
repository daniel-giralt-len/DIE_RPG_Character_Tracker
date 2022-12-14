import { useState } from 'react'
import styled from 'styled-components'

import StatList from './StatList'
import AdvancementList from './AdvancementList'

import NameText from './LevelUpWizardInputs/NameText'
import ParagonRadio from './LevelUpWizardInputs/ParagonRadio'
import SubmitButton from './LevelUpWizardInputs/SubmitButton'

import AdvancementTree from './AdvancementTree'

import { Button, MainTitle } from './sharedComponents'
import { getAdvancementsData } from '../data/advancementsDb'

const Centerer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LevelUpWizard = ({
    characterData,
    nLevel,
    translate,
    onFinishWizard,
    onCloseWizard
}) => {
    let maxStatBudget = 1

    const levelsWithStatsUpgrade = [1,3,6,9,12]
    const hasStatsUpgrade = levelsWithStatsUpgrade.includes(nLevel) || characterData.paragon === 'master'

    const [usedStatBudget, setUsedStatBudget] = useState(0)
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({})

    const handleSelectAdvancement = i => setForm({...form, advancement: i})
    const handleAdvancementRequirementSelect = advancementsRequirements => setForm({...form, advancementsRequirements})
    const onStatsChange = (stats, usedBudget) => {
        setForm({...form, stats})
        setUsedStatBudget(usedBudget)
    }
    const onSubmit = () => {
        const e = {
            advancement: !form.advancement,
            advancementsRequirements: (form.paragon || characterData.paragon) 
                ? (getAdvancementsData({positions: [form.advancement], paragon: form.paragon || characterData.paragon})
                    .filter(({id,selector}) => selector && (!form.advancementsRequirements || form.advancementsRequirements[id] === undefined)))
                : []
        }
        if(nLevel === 1){
            e.name = !form.name || form.name === ''
            e.paragon = !form.paragon
        }
        if(hasStatsUpgrade){
            e.stats = usedStatBudget !== maxStatBudget
        }
        const anyError = e.name || e.paragon || e.stats || e.advancement ||(e.advancementsRequirements).length > 0
        if(anyError){ return setErrors(e) }
        return onFinishWizard(form)
    }

    if(nLevel === 1){ //choose paragon
        if(!form.advancement){ setForm({...form, advancement: 1}) }
        const onNameChange = name => setForm({...form, name})
        const onParagonChange = paragon => setForm({...form, paragon})
        
        maxStatBudget = 2
        return (<section>
            <MainTitle>{translate('new character')}</MainTitle>
            <NameText
                hasError={errors.name}
                name={form.name || ''}
                onNameChange={onNameChange}
                translate={translate}
            />
            <ParagonRadio
                hasError={errors.paragon}
                selectedParagon={form.paragon}
                onParagonChange={onParagonChange}
                translate={translate}
            />
            {form.paragon && (<StatList
                editable
                hasError={errors.stats}
                maxBudget={maxStatBudget}
                onStatsChange={onStatsChange}
                paragon={form.paragon}
                stats={form.stats || {}}
                translate={translate}
                usedBudget={usedStatBudget}
            />)}
            {form.paragon && (<AdvancementList
                advancementPositions={[form.advancement]}
                editable
                hasErrors={errors.advancementsRequirements}
                onAdvancementRequirementSelect={handleAdvancementRequirementSelect}
                paragon={form.paragon}
                requirements={form.advancementsRequirements}
                translate={translate}
            />)}
            <SubmitButton
                onSubmit={onSubmit}
                translate={translate}
            />
        </section>)
    }

    return (
        <Centerer>
            <Button
                style={{gridArea: 'opener'}}
                onClick={onCloseWizard}
                noBorder
            >
                ??????
            </Button>
            <MainTitle>
                {translate('next level')} ({nLevel})
            </MainTitle>
            {hasStatsUpgrade && (<StatList
                editable
                hasError={errors.stats}
                maxBudget={maxStatBudget}
                onStatsChange={onStatsChange}
                paragon={characterData.paragon}
                stats={characterData.stats || {}}
                translate={translate}
                usedBudget={usedStatBudget}
            />)}
            {(form.advancement) && (<AdvancementList
                advancementPositions={[form.advancement]}
                editable
                hasErrors={errors.advancementsRequirements}
                onAdvancementRequirementSelect={handleAdvancementRequirementSelect}
                paragon={characterData.paragon}
                requirements={form.advancementsRequirements}
                translate={translate}
            />)}
            <AdvancementTree
                hasErrors={errors.advancement}
                paragon={characterData.paragon}
                selectedAdvancementsIds={characterData.advancements}
                tentativeSelected={form.advancement}
                onSelectAdvancement={handleSelectAdvancement}
                translate={translate}
            />
            <SubmitButton
                onSubmit={onSubmit}
                translate={translate}
            />
        </Centerer>)
}
export default LevelUpWizard