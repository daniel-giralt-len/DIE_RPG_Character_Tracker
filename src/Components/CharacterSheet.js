import advancementsDb from '../data/advancementsDb'

import StatList from './StatList'
import AdvancementList from './AdvancementList'

const CharacterSheet = ({name, paragon, stats, levels, translate}) => {
    const advancements = advancementsDb[paragon].positions[1]
    return (<div>

            <h1>{translate(name)}</h1>
            <h2>{translate(paragon)}</h2>
            <StatList
                stats={stats}
                paragon={paragon}
                translate={translate}
            />
            <AdvancementList 
                advancements={advancements}
                translate={translate}
            />
    </div>)
}
export default CharacterSheet