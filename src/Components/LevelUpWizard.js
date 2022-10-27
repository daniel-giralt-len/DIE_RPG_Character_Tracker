import { useState } from 'react'

import StatList from './StatList'
import AdvancementList from './AdvancementList'

import NameText from './LevelUpWizardInputs/NameText'
import ParagonRadio from './LevelUpWizardInputs/ParagonRadio'
import SubmitButton from './LevelUpWizardInputs/SubmitButton'

import advancementsDb from '../data/advancementsDb'

const LevelUpWizard = ({
    nLevel,
    translate
}) => {
    const [form, setForm] = useState({})
    const onSubmit = () => {}
    if(form.paragon){
    }
    if(nLevel === 0){ //choose paragon
        const onNameChange = name => setForm({...form, name})
        const onParagonChange = paragon => setForm({...form, paragon})
        const onStatsChange = stats => setForm({...form, stats})
        const maxStatPointBudget = 2
        return (<section>
            <NameText
                name={form.name || ''}
                onNameChange={onNameChange}
                translate={translate}
            />
            <ParagonRadio
                selectedParagon={form.paragon}
                onParagonChange={onParagonChange}
                translate={translate}
            />
            {form.paragon && (<StatList
                editable
                maxBudget={maxStatPointBudget}
                stats={form.stats || {}}
                onStatsChange={onStatsChange}
                paragon={form.paragon}
                translate={translate}
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