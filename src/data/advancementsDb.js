import dictatorAdvancement from './dictatorAdvancement'
import emotionKnightAdvancement from './emotionKnightAdvancement'
import foolAdvancement from './foolAdvancement'
import godbinderAdvancement from './godbinderAdvancement'
import masterAdvancement from './masterAdvancement'
import neoAdvancement from './neoAdvancement'

const advancementsDb = {
    dictator: dictatorAdvancement,
    emotionKnight: emotionKnightAdvancement,
    fool: foolAdvancement,
    godbinder: godbinderAdvancement,
    master: masterAdvancement,
    neo: neoAdvancement,
}

const getAdvancementsInPosition = (paragon, position) => advancementsDb[paragon].positions[position]

const getAdvancementsData = ({
    positions,
    paragon
}) => positions.map(position => getAdvancementsInPosition(paragon, position))
        .reduce((acc,arr)=>([...acc,...arr]),[])
        .map(id => ({id, ...advancementsDb[paragon].db[id]}))

export default advancementsDb
export {
    getAdvancementsData
}