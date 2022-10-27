import styled from 'styled-components'
import { useState } from "react"

import SectionTitle from "./SectionTitle"
import Stat from "./Stat"

import paragons from '../data/paragons'

const StatListWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 0.5em 0;
    ${({lineBreak})=>lineBreak ? `
    border-bottom: 0.2em solid black;
        `: ''}
`

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
        <SectionTitle
            blackLabel
        >
            {`${translate('pick your stats').toUpperCase()} (${usedPoints}/${maxBudget})`}
        </SectionTitle>
        <StatListWrapper lineBreak>
            {editableStats.map(name => (<Stat
                {...getGeneralParameters(name)}
                disabled={!editable}
                isBaseStat
                value={stats[name] || 2}
            />))}
        </StatListWrapper>
        <StatListWrapper>
            {Object.entries(calculatedStats).map(([name, value]) => (<Stat 
                {...getGeneralParameters(name)}
                value={value || 0}
            />))}
        </StatListWrapper>
    </div>)
}
export default StatList