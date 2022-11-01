const accumulateLevelData = (character, selectedLevel) => {
    const base = {
        ...((character.levels||[])[0] || {}),
        nLevel: character.nLevel,
    }
    base.advancements = [base.advancement]
    
    const maxLevel = (selectedLevel || character.nLevel) - 1
    for(let i=1; i<maxLevel; i++){
        const cl = character.levels[i]
        console.log(cl)
        base.advancements = [
            ...base.advancements,
            cl.advancement
        ]
    }
    console.log(base)

    return base
}

export default accumulateLevelData