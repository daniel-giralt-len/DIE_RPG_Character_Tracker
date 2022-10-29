import styled from 'styled-components'

const MainTitle = styled.h1`
    text-align: center;
    font-size: 2em;
`

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

const Button = styled.button`
    ${({noBorder})=>noBorder
        ? 'border: 0;'
        : 'border: 0.1em solid black;'}
    border-radius: 0.15em;
    margin: 0.25em;
    padding: 0.3em 0.1em;
    &:hover{
        background: grey;
    }
    ${({selected})=>selected
        ? 'background-color: #dbdbdb;'
        : ''}
`

const TextInput = styled.textarea`
    resize: none;
    overflow-y: clip;

    border: none;
    border-bottom: 0.1em solid black;
    margin: 0.25em;
    padding: 0.2em;
    padding-bottom: 0;

    width: 100%; 
    &:focus{
        outline: none;
    }
    ${({hasError})=>hasError ? 'background: #ffd7d7;':''}
`

export {
    Button,
    MainTitle,
    SectionTitle,
    TextInput
}