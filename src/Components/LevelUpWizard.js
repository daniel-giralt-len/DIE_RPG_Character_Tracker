import { useState } from 'react'

import StatList from './StatList'
import AdvancementList from './AdvancementList'

import NameText from './LevelUpWizardInputs/NameText'
import ParagonRadio from './LevelUpWizardInputs/ParagonRadio'
import SubmitButton from './LevelUpWizardInputs/SubmitButton'

import advancementsDb from '../data/advancementsDb'

const LevelUpWizard = ({
    nLevel,
    translate,
    onFinishWizard,
}) => {
    let maxStatBudget = 0
    const [usedStatBudget, setUsedStatBudget] = useState(0)
    const [validity, setValidity] = useState({})
    const [form, setForm] = useState({})
    const onSubmit = () => {
        const isValid = {
            name: form.name && form.name !== '',
            paragon: form.paragon,
            stats: usedStatBudget === maxStatBudget
        }
        if(Object.values(isValid).reduce((acc,v)=>acc&&v,true)){
            return onFinishWizard(form)
        }
        setValidity(isValid)
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
            <NameText
                name={form.name || ''}
                onNameChange={onNameChange}
                translate={translate}
                isValid={validity.name}
            />
            <ParagonRadio
                selectedParagon={form.paragon}
                onParagonChange={onParagonChange}
                translate={translate}
                isValid={validity.paragon}
            />
            {form.paragon && (<StatList
                editable
                maxBudget={maxStatBudget}
                usedBudget={usedStatBudget}
                stats={form.stats || {}}
                onStatsChange={onStatsChange}
                paragon={form.paragon}
                translate={translate}
                isValid={validity.stats}
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