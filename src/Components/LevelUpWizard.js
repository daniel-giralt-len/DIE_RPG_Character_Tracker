import { useState } from 'react'

import StatList from './StatList'
import AdvancementList from './AdvancementList'

import NameText from './LevelUpWizardInputs/NameText'
import ParagonRadio from './LevelUpWizardInputs/ParagonRadio'
import SubmitButton from './LevelUpWizardInputs/SubmitButton'

import { MainTitle } from './sharedComponents'

const LevelUpWizard = ({
    nLevel,
    translate,
    onFinishWizard,
}) => {
    let maxStatBudget = 0
    const [usedStatBudget, setUsedStatBudget] = useState(0)
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({})

    const handleAdvancementRequirementSelect = advancementsRequirements => setForm({...form, advancementsRequirements})
    const onStatsChange = (stats, usedBudget) => {
        setForm({...form, stats})
        setUsedStatBudget(usedBudget)
    }
    const onSubmit = () => {
        const potentialErrors = {
            name: !form.name || form.name === '',
            paragon: !form.paragon,
            stats: usedStatBudget !== maxStatBudget,
            advancementsRequirements: false
        }
        if(Object.values(potentialErrors).reduce((acc,v)=>acc||v,false)){
            return setErrors(potentialErrors)
        }
        return onFinishWizard(form)
    }

    if(nLevel === 1){ //choose paragon
        const onNameChange = name => setForm({...form, name})
        const onParagonChange = paragon => setForm({...form, paragon})
        const advancementPosition = 1
        
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
                editable
                advancementPositions={[advancementPosition]}
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
    return <div></div>
}
export default LevelUpWizard