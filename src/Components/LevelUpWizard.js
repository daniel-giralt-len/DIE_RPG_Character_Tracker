import NameText from './LevelUpWizardInputs/NameText'
import StatsNumber from './LevelUpWizardInputs/StatsNumber'
import ParagonRadio from './LevelUpWizardInputs/ParagonRadio'

const LevelUpWizard = ({
    nLevel
}) => {
    if(nLevel === 0){ //choose paragon
        return (<section>
            <NameText></NameText>
            <ParagonRadio></ParagonRadio>
            <StatsNumber></StatsNumber>
        </section>)
    }
    return <div></div>
}
export default LevelUpWizard