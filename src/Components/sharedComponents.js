import styled from 'styled-components'

const Button = styled.button`
    border: 0.1em solid black;
    border-radius: 0.75em;
    margin: 0.25em;
    padding: 0.1em;
    &:hover{
        background: grey;
    }
    ${({selected})=>selected
        ? 'background-color: #dbdbdb;'
        : ''}
`

export {
    Button
}