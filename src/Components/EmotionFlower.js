import emotionFlowerPetals from '../data/emotionFlower'
import styled from 'styled-components'

const cellSize = 5.5

const FlowerWrapper = styled.div`
    display: grid;
    grid-template-areas:
        "l7 l0 l1"
        "l6  c l2"
        "l5 l4 l3";
    width: ${3*cellSize}em;
`

const PetalWrapper = styled.div`
    grid-area: ${({index})=>index};
    ${({border})=>border
        ? `
border: 0.2em solid black;
border-radius: 0.75em;
margin: 0.25em;
padding: 0.25em;
width: ${cellSize}em;`
        : ''}
    text-align: center;
    ${({centered})=>centered ? `
    display: flex;
    align-items: center;
    justify-content: center;
` : ''};
`

const EmotionFlower = ({translate}) => {
    
    return (
        <FlowerWrapper>
            {
                emotionFlowerPetals
                    .map((parts, i) => 
                        (<PetalWrapper key={i} index={`l${i}`} border>
                            {parts
                                .map(translate)
                                .map(s=>`${s},`)
                                .map(s=>(<div key={s}>{s}</div>))
                            }
                        </PetalWrapper>)
                    )
            }
            <PetalWrapper index='c' centered>
                {translate('emotions')}
            </PetalWrapper>
        </FlowerWrapper>
    )
}

export default EmotionFlower