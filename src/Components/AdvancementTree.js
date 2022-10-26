import styled from 'styled-components'

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
    grid-area: ${({area})=>area};

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

const getBackgroundImage = i => {
    const bgUp = 'advancementUp.png'
    const bgDown = 'advancementDown.png'
    return (isTriangleDown(i) ? bgDown : bgUp)
}

const AdvancementTree = () => {
    const cellIds = [
        [20,     19,     null,   15,     16,     null, ],
        [18,     17,     12,     13,     14,     null, ],
        [null,   11,     10,     9,      null,   null, ],
        [null,   null,   7,      8,      null,   null, ],
        [null,   6,      5,      2,      3,      4,    ],
        [null,   null,   null,   1,      null,   null,  ],
    ]
    return (<TreeStructure>
        {cellIds.map((row, i)=>(
            <TreeRow key={i}>
                {row.map((id, i) => (
                        id === null 
                        ? (<TreeCell key={i} />)
                        : (<TreeCell
                                key={i}
                                backgroundImg={getBackgroundImage(id)}
                                isTriangleDown={isTriangleDown(id)}
                            >
                                <CellContent isTriangleDown={isTriangleDown(id)}>
                                    This is advancement #{id}
                                </CellContent>
                            </TreeCell>)
                ))}
            </TreeRow>
        ))}
    </TreeStructure>)
}

export default AdvancementTree


