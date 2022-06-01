import './ErrorDialog.css';
const ErrorDialog = props => {
    return (
        <div className='flex-row w-100'>
            <div className='dialog'>
                <p className='dialog-message font-roboto'>{props.message}</p>
            </div>
        </div>
    );

};

export default ErrorDialog;