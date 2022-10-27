import styled from 'styled-components'

const ButtonWrapper = styled.button`
    border: 0.1em solid black;
    margin: 0.25em;
    padding: 0.1em;
    background: #fff;
    &:hover{
        background: grey;
    }
`

const SubmitButton = ({onSubmit, translate}) => {
    return (<ButtonWrapper onClick={onSubmit}>
        {translate('next').toUpperCase()}
    </ButtonWrapper>)
}
export default SubmitButton