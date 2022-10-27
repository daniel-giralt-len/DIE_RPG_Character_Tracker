import SectionTitle from "./SectionTitle"
import Stat from "./Stat"

const calculateStat = (name, stats) => 0

const StatList = ({
    editable = false,
    onStatsChange,
    paragon,
    stats,
    translate
}) => {
    const editableStats = [ 'str', 'dex', 'con', 'int', 'wis', 'cha'
    ]
    const calculatedStats = ['guard', 'health', 'willpower']
    const fixedStats= ['defence']

    const onStatChange = (name, newValue) => onStatsChange({...stats, [name]: newValue})

    const getGeneralParameters = name => ({
        key: name,
        name,
        paragon,
        translate,
        onStatChange
    })

    return (<div>
        <SectionTitle>{translate('pick your stats')}</SectionTitle>
        <div>
            {editableStats.map(name => (<Stat
                {...getGeneralParameters(name)}
                disabled={!editable}
                isBaseStat
                value={stats[name] || 2}
            />))}
        </div>
        <div>
            {calculatedStats.map(name => (<Stat 
                {...getGeneralParameters(name)}
                value={calculateStat(name, stats) || 0}
            />))}
            {fixedStats.map(name => (<Stat 
                {...getGeneralParameters(name)}
                value={0}
            />))}
        </div>
    </div>)
}
export default StatList