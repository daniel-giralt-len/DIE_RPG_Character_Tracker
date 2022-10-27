import paragons from '../data/paragons'
import SectionTitle from "./SectionTitle"
import Stat from "./Stat"
import { useState } from "react"

const StatList = ({
    editable = false,
    onStatsChange,
    paragon,
    stats,
    translate,
    maxBudget = 1
}) => {
    const minBaseStatPoints = 2
    const editableStats = [ 'str', 'dex', 'con', 'int', 'wis', 'cha'
    ]
    const calculatedStats= {
        "guard": (stats.dex||minBaseStatPoints),
        "health": (stats.con||minBaseStatPoints),
        "willpower": (stats.wis||minBaseStatPoints)+(stats.int||minBaseStatPoints),
        "defence": paragons[paragon].baseDefence
    }
    const [usedPoints, setUsedPoints] = useState(0)
    console.log(stats)

    const onStatChange = (name, newValue) => {
        const newStats = {...stats, [name]: newValue}
        const projectedBudget = Object.values(newStats).reduce((acc, v=0) => acc + Math.max(v-minBaseStatPoints,0), 0)
        if(projectedBudget <= maxBudget){
            setUsedPoints(projectedBudget)   
            onStatsChange(newStats)
        }
    }

    const getGeneralParameters = name => ({
        key: name,
        name,
        paragon,
        translate,
        onStatChange
    })

    return (<div>
        <SectionTitle>{`${translate('pick your stats')} (${usedPoints}/${maxBudget})`}</SectionTitle>
        <div>
            {editableStats.map(name => (<Stat
                {...getGeneralParameters(name)}
                disabled={!editable}
                isBaseStat
                value={stats[name] || 2}
            />))}
        </div>
        <div>
            {Object.entries(calculatedStats).map(([name, value]) => (<Stat 
                {...getGeneralParameters(name)}
                value={value || 0}
            />))}
        </div>
    </div>)
}
export default StatList