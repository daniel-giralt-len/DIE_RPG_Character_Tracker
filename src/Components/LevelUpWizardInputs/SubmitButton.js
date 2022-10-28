import { Button } from "../sharedComponents"
import styled from 'styled-components'

const ButtonWrapper = styled.div`
    margin-top: 1.5em;
    display: flex;
    justify-content: flex-end;
`

const SubmitButton = ({onSubmit, translate}) => {
    return (<ButtonWrapper>
        <Button onClick={onSubmit}>
            {translate('next').toUpperCase()}
        </Button>
    </ButtonWrapper>)
}
export default SubmitButton