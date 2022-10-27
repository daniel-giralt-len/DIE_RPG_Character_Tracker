import { useState } from 'react'

import NameText from './LevelUpWizardInputs/NameText'
import StatsNumber from './LevelUpWizardInputs/StatsNumber'
import ParagonRadio from './LevelUpWizardInputs/ParagonRadio'
import SubmitButton from './LevelUpWizardInputs/SubmitButton'

const LevelUpWizard = ({
    nLevel,
    translate
}) => {
    const [form, setForm] = useState({})
    const onSubmit = () => {}
    if(nLevel === 0){ //choose paragon
        const onNameChange = name => setForm({...form, name})
        const onParagonChange = paragon => setForm({...form, paragon})
        const onStatsChange = stats => setForm({...form, stats})
        return (<section>
            <NameText
                onNameChange={onNameChange}
                translate={translate}
            />
            <ParagonRadio
                onParagonChange={onParagonChange}
                translate={translate}
            />
            <StatsNumber
                onStatsChange={onStatsChange}
                translate={translate}
            />
            <SubmitButton
                onSubmit={onSubmit}
                translate={translate}
            />
        </section>)
    }
    return <div></div>
}
export default LevelUpWizard