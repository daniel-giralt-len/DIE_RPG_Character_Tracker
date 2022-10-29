import styled from 'styled-components'

import advancementsDb from '../data/advancementsDb'

const getTriangleHeight = a =>  a * Math.sqrt(3) / 2

const cellWidth = 10
const cellHeight = getTriangleHeight(cellWidth)

const TreeStructure = styled.div`
    display:flex;
    flex-direction: column;
    
    width: ${6*cellWidth}em;
    height: ${6*cellHeight}em;
`

const TreeRow = styled.div`
    display: flex;
`

const TreeCell = styled.div`
    background: url(${({backgroundImg})=>backgroundImg});
    background-size: cover;

    width: ${cellWidth+0.5}em;
    height: ${cellHeight}em;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    ${({isTriangleDown})=>isTriangleDown === false
        ? `border-bottom: 0.1em solid black;`
        : ''
    }
    margin-right: -${0.325+cellWidth/2}em;

    ${({selected,selectable})=>selectable && !selected
    ? `
    &:hover{
        text-decoration: underline;
    }
    font-style: italic;
    `
    : ''}


    ${({selected})=>selected
    ? `color: #fff;`
    : ''}
`

const CellContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    ${({isTriangleDown})=>isTriangleDown 
        ? `margin-bottom: ${cellWidth/4}em;`
        : `margin-top: ${cellHeight/3}em;`
    }
    width: ${cellWidth/2}em;
    height: ${cellHeight/2}em;
`

const isTriangleDown = i => {
    const coordinates = {
        20: {x: 0, y: 0},
        19: {x: 1, y: 0},
        15: {x: 3, y: 0},
        16: {x: 4, y: 0},
        18: {x: 0, y: 1},
        17: {x: 1, y: 1},
        12: {x: 2, y: 1},
        13: {x: 3, y: 1},
        14: {x: 4, y: 1},
        11: {x: 1, y: 2},
        10: {x: 2, y: 2},
        9:  {x: 3, y: 2},
        7:  {x: 2, y: 3},
        8:  {x: 3, y: 3},
        6:  {x: 1, y: 4},
        5:  {x: 2, y: 4},
        2:  {x: 3, y: 4},
        3:  {x: 4, y: 4},
        4:  {x: 5, y: 4},
        1:  {x: 3, y: 5},
    }
    const {x,y} = coordinates[i]
    return x % 2 === ((y % 2 === 0) ? 0 : 1)
}

const getBackgroundImage = (i,selected) => {
    const bgUp = 'advancementUp.png'
    const bgDown = 'advancementDown.png'
    const bgSelectedUp = 'advancementSelectedUp.png'
    const bgSelectedDown = 'advancementSelectedDown.png'
    if(selected){
        return (isTriangleDown(i) ? bgSelectedDown : bgSelectedUp)
    }
    return (isTriangleDown(i) ? bgDown : bgUp)
}

const cellIds = [
    [20,     19,     null,   15,     16,     null, ],
    [18,     17,     12,     13,     14,     null, ],
    [null,   11,     10,     9,      null,   null, ],
    [null,   null,   7,      8,      null,   null, ],
    [null,   6,      5,      2,      3,      4,    ],
    [null,   null,   null,   1,      null,   null,  ],
]

const directionalEdges = {
    1:[2],
    2:[3,5],
    3:[4],
    5:[6,7],
    7:[8],
    8:[9],
    9:[10],
    10:[11,12],
    12:[13,17],
    13:[15,14],
    15:[16],
    17:[18,19],
    19:[20]
}

const AdvancementTree = ({paragon, selectedAdvancementsIds, translate}) => {

    const advancementNames = advancementsDb[paragon].positions

    const selectableCells = selectedAdvancementsIds
        .map(id => directionalEdges[id] || [])
        .reduce((acc,arr)=>([...acc,...arr]),[])
        .filter(v=>v)
    console.log(selectedAdvancementsIds)
    console.log(selectableCells)

    return (<TreeStructure>
        {cellIds.map((row, i)=>(
            <TreeRow key={i}>
                {row.map((id, j) => {
                    if(id === null){
                        return (<TreeCell key={j} />)
                    }
                    const selected = selectedAdvancementsIds.includes(id)
                    return(
                        <TreeCell
                            key={j}
                            backgroundImg={getBackgroundImage(id, selected)}
                            isTriangleDown={isTriangleDown(id)}
                            selected={selected}
                            selectable={selectableCells.includes(id)}
                        >
                            <CellContent isTriangleDown={isTriangleDown(id)}>
                                {id === 1 ? translate('start').toUpperCase() : advancementNames[id]}
                            </CellContent>
                        </TreeCell>
                )
                })}
            </TreeRow>
        ))}
    </TreeStructure>)
}

export default AdvancementTree