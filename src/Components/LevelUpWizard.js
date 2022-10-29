import { useState } from 'react'

import StatList from './StatList'
import AdvancementList from './AdvancementList'

import NameText from './LevelUpWizardInputs/NameText'
import ParagonRadio from './LevelUpWizardInputs/ParagonRadio'
import SubmitButton from './LevelUpWizardInputs/SubmitButton'

import { Button, MainTitle } from './sharedComponents'
import { getAdvancementsData } from '../data/advancementsDb'

const LevelUpWizard = ({
    characterData,
    nLevel,
    translate,
    onFinishWizard,
    onCloseWizard
}) => {
    let advancementPosition = 1
    let maxStatBudget = 1
    const [usedStatBudget, setUsedStatBudget] = useState(0)
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({})

    const handleAdvancementRequirementSelect = advancementsRequirements => setForm({...form, advancementsRequirements})
    const onStatsChange = (stats, usedBudget) => {
        setForm({...form, stats})
        setUsedStatBudget(usedBudget)
    }
    const onSubmit = () => {
        const e = {
            name: !form.name || form.name === '',
            paragon: !form.paragon,
            stats: usedStatBudget !== maxStatBudget,
            advancementsRequirements: form.paragon ? (
                getAdvancementsData({positions: [advancementPosition], paragon: form.paragon})
                    .filter(({id,selector}) => selector && (!form.advancementsRequirements || form.advancementsRequirements[id] === undefined))
                ) : []
        }
        const anyError = e.name || e.paragon || e.stats || (e.advancementsRequirements).length > 0
        if(anyError){
            return setErrors(e)
        }
        return onFinishWizard(form)
    }

    if(nLevel === 1){ //choose paragon
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
                advancementPositions={[advancementPosition]}
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

    const levelsWithStatsUpgrade = [3,6,9,12]
    const hasStatsUpgrade = levelsWithStatsUpgrade.includes(nLevel) || characterData.paragon === 'master'

    return (
        <section>
            <Button
                style={{gridArea: 'opener'}}
                onClick={onCloseWizard}
                noBorder
            >
                ✖️
            </Button>
            <MainTitle>{translate('next level')} ({nLevel})</MainTitle>
            {hasStatsUpgrade && (<StatList
                editable
                hasError={errors.stats}
                maxBudget={maxStatBudget}
                onStatsChange={onStatsChange}
                paragon={form.paragon}
                stats={form.stats || {}}
                translate={translate}
                usedBudget={usedStatBudget}
            />)}
        </section>)
}
export default LevelUpWizard