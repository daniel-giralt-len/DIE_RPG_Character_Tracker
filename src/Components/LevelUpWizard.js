import { useState } from 'react'

import StatList from './StatList'
import AdvancementList from './AdvancementList'

import NameText from './LevelUpWizardInputs/NameText'
import ParagonRadio from './LevelUpWizardInputs/ParagonRadio'
import SubmitButton from './LevelUpWizardInputs/SubmitButton'

import advancementsDb from '../data/advancementsDb'
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
    const onSubmit = () => {
        const validation = {
            name: !form.name || form.name === '',
            paragon: !form.paragon,
            stats: usedStatBudget !== maxStatBudget
        }
        if(Object.values(validation).reduce((acc,v)=>acc||v,false)){
            return setErrors(validation)
        }
        return onFinishWizard(form)
    }
    if(form.paragon){
    }
    if(nLevel === 0){ //choose paragon
        const onNameChange = name => setForm({...form, name})
        const onParagonChange = paragon => setForm({...form, paragon})
        const onStatsChange = (stats, usedBudget) => {
            setForm({...form, stats})
            setUsedStatBudget(usedBudget)
        }
        maxStatBudget = 2
        return (<section>
            <MainTitle>{translate('new character')}</MainTitle>
            <NameText
                name={form.name || ''}
                onNameChange={onNameChange}
                translate={translate}
                hasError={errors.name}
            />
            <ParagonRadio
                selectedParagon={form.paragon}
                onParagonChange={onParagonChange}
                translate={translate}
                hasError={errors.paragon}
            />
            {form.paragon && (<StatList
                editable
                maxBudget={maxStatBudget}
                usedBudget={usedStatBudget}
                stats={form.stats || {}}
                onStatsChange={onStatsChange}
                paragon={form.paragon}
                translate={translate}
                hasError={errors.stats}
            />)}
            {form.paragon && (<AdvancementList 
                advancements={advancementsDb[form.paragon].positions[1]}
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