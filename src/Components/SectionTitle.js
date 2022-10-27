import styled from 'styled-components'

const SectionTitle = styled.h2`
    margin-top: 0.5em;
    margin-bottom: 0.25em;
    border-radius: 0.25em;
    padding: 0.3em 0.5em;
    ${({blackLabel})=>blackLabel ? `
color: white;
background: black;
    `: ''}
    ${({error, blackLabel})=>{
        if(error){
            return (blackLabel ? 'color: #ff7b7b;':'background: #ffd7d7;')
        }
        return ''
    }}
`

export default SectionTitle