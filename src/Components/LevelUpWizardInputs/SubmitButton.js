import { Button } from "../sharedComponents"

const SubmitButton = ({onSubmit, translate}) => {
    return (<Button onClick={onSubmit}>
        {translate('next').toUpperCase()}
    </Button>)
}
export default SubmitButton