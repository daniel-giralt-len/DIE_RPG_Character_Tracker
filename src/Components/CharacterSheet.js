import styled from 'styled-components'

import advancementsDb from '../data/advancementsDb'

import StatList from './StatList'
import AdvancementList from './AdvancementList'

const CharacterTitle = styled.h1``

const CharacterSheet = ({name, paragon, stats, levels, translate}) => {
    const advancements = advancementsDb[paragon].positions[1]
    return (<section>
            <CharacterTitle>{`${translate(name)}, ${translate(paragon).toUpperCase()}`}</CharacterTitle>
            <StatList
                stats={stats}
                paragon={paragon}
                translate={translate}
            />
            <AdvancementList 
                advancements={advancements}
                translate={translate}
            />
    </section>)
}
export default CharacterSheet