const accumulateLevelData = (character, selectedLevel) => {
    const base = {
        ...((character.levels||[])[0] || {}),
        nLevel: character.nLevel,
    }
    base.advancements = [base.advancement]
    for(let i=1; i<selectedLevel; i++){
        
    }
    return base
}

export default accumulateLevelData