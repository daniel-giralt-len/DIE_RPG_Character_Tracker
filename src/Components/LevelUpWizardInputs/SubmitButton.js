const SubmitButton = ({onClick, translate}) => {
    return <button onClick={onClick}>{translate('next')}</button>
}
export default SubmitButton