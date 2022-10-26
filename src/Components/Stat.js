import paragons from '../data/paragons'
import styled from 'styled-components'

const StatWrapper = styled.div`
    background: url(${({border})=>border});
    background-size: cover;

    width: 3em;
    height: 3em;

    display: flex;
    justify-content: center;
    align-items: center;
`

const Stat = ({paragon, value}) => (
    <StatWrapper border={paragons[paragon].statIcon}>
            {value}
    </StatWrapper>
)

export default Stat