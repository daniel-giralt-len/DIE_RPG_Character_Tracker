import styled from 'styled-components'

import StatList from './StatList'
import AdvancementList from './AdvancementList'

const CharacterTitle = styled.h1``

const CharacterSheet = ({
    advancementsRequirements = {},
    name,
    paragon,
    stats,
    nLevel,
    selectedLevel,
    translate,
    advancements
}) => {
    return (<section>
            <CharacterTitle>{`${name}, ${translate(paragon)} (${translate('lvl')} ${selectedLevel})`}</CharacterTitle>
            <StatList
                stats={stats}
                paragon={paragon}
                translate={translate}
            />
            <AdvancementList 
                advancementPositions={advancements}
                nLevel={nLevel}
                paragon={paragon}
                requirements={advancementsRequirements}
                translate={translate}
            />
    </section>)
}
export default CharacterSheet