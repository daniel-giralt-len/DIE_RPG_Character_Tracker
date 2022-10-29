import styled from 'styled-components'

import StatList from './StatList'
import AdvancementList from './AdvancementList'

const CharacterTitle = styled.h1``

const CharacterSheet = ({
    advancementsRequirements = {},
    name,
    paragon,
    stats,
    levels,
    nLevel,
    translate,
    selectedAdvancementsIds
}) => {
    return (<section>
            <CharacterTitle>{`${translate(name)}, ${translate(paragon).toUpperCase()}`}</CharacterTitle>
            <StatList
                stats={stats}
                paragon={paragon}
                translate={translate}
            />
            <AdvancementList 
                advancementPositions={selectedAdvancementsIds}
                nLevel={nLevel}
                paragon={paragon}
                requirements={advancementsRequirements}
                translate={translate}
            />
    </section>)
}
export default CharacterSheet