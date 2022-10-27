import styled from 'styled-components'

const SectionTitle = styled.h2`
    margin-top: 0.5em;
    margin-bottom: 0.25em;
    ${({blackLabel})=>blackLabel ? `
color: white;
background: black;
    border-radius: 0.25em;
    padding: 0.3em 0.5em;
    `: ''}
`

export default SectionTitle