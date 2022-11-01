import styled from 'styled-components'

import advancementsDb from '../data/advancementsDb'

const getTriangleHeight = a =>  a * Math.sqrt(3) / 2

const cellWidth = 10
const cellHeight = getTriangleHeight(cellWidth)

const TreeStructure = styled.div`
    grid-template-columns: repeat(6,${cellWidth*3.5/10}em);

    display: grid;
    grid-template-areas:
        "l20 l19 .    l15 l16 . "
        "l18 l17 l12  l13 l14 . "
        ".   l11 l10  l9  .   . "
        ".   .   l7   l8  .   . "
        ".   l6  l5   l2  l3  l4"
        ".   .   .    l1  .   . ";
    ${({hasError})=>hasError ? 'background: #ffd7d7;':''}
`

const TreeCell = styled.div`
    grid-area: l${({area})=>area};

    background: url(${({backgroundImg})=>backgroundImg});
    background-size: cover;

    font-size: 0.6em;
    width: ${cellWidth}em;
    height: ${cellHeight}em;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    ${({selected,selectable})=>selectable && !selected
    ? `
    &:hover{
        text-decoration: underline;
    }
    font-style: italic;`
    : ''}
    
    
    ${({isTriangleDown})=>isTriangleDown === false ? 'border-bottom: 0.1em solid black;' : '' }
    ${({selected})=>selected ? `color: #fff;` : ''}
`

const CellContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    ${({isTriangleDown})=>isTriangleDown 
        ? `margin-bottom: ${cellWidth/4}em;`
        : `margin-top: ${cellHeight/3}em;`
    }
    width: 50%;
    height: 50%;
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

const AdvancementTree = ({
    hasErrors,
    paragon,
    onSelectAdvancement,
    selectedAdvancementsIds,
    tentativeSelected,
    translate
}) => {
    const advancementNames = advancementsDb[paragon].positions

    const selectableCells = selectedAdvancementsIds
        .map(id => directionalEdges[id] || [])
        .reduce((acc,arr)=>([...acc,...arr]),[])
        .filter(v=>v)

    return (<TreeStructure hasError={hasErrors}>
        {Array(20).fill().map((_, i)=>{
            const selected = [...selectedAdvancementsIds, tentativeSelected].includes(i+1)
            const selectable = selectableCells.includes(i+1)
            return (<TreeCell
                key={i+1}
                area={i+1}
                backgroundImg={getBackgroundImage(i+1, selected)}
                isTriangleDown={isTriangleDown(i+1)}
                selected={selected}
                onClick={() => selectable ? onSelectAdvancement(i+1) : null}
                selectable={selectable}
            >
                <CellContent isTriangleDown={isTriangleDown(i+1)}>
                    {i+1 === 1 ? translate('start').toUpperCase() : advancementNames[i+1]}
                </CellContent>
            </TreeCell>)
            }
        )}
    </TreeStructure>)
}

export default AdvancementTree