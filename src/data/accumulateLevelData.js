const accumulateLevelData = (character, selectedLevel) => {
    const base = {
        ...((character.levels||[])[0] || {}),
        nLevel: character.nLevel,
        selectedAdvancementsIds: character.selectedAdvancementsIds
    }
    for(let i=1; i<selectedLevel; i++){
        
    }
    return base
}

export default accumulateLevelData