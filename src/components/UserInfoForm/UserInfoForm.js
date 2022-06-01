import { useState } from 'react';
import ErrorDialog from '../UI/ErrorDialog/ErrorDialog';
import './UserInfoForm.css';

const UserInfoForm = (props) => {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [isNameFilled, setIsNameFilled] = useState(true);
    const [isAgeFilled, setIsAgeFilled] = useState(true);
    const [isAgeEditted, setIsAgeEditted] = useState(false);
    const [isAgeValid, setIsAgeValid] = useState(true);

    const changeUserNameHandler = (event) => {
        if (event.target.value.length > 0) {
            setIsNameFilled(true);
        }
        setUserName(event.target.value);
    }

    const changeUserAgeHandler = (event) => {
        if (event.target.value.length > 0) {
            setIsAgeFilled(true);
            setIsAgeEditted(true);
        }
        setUserAge(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (!checkFormIfValid()) {
            return;
        };
        const userInfo = {
            name: userName,
            age: userAge
        };
        props.onUserInfoSubmit(userInfo)
    }

    const checkFormIfValid = () => {
        if (userName.length === 0) {
            setIsNameFilled(false);
            return false;
        }
        if (userAge.length === 0) {
            setIsAgeFilled(false);
            return false;
        }
        if (isAgeFilled && userAge <= 0) {
            setIsAgeValid(false)
            return false;
        }
        return true;
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='flex-column gap-1'>
                <h2 className='text-dark title font-roboto align-left'>Add a new user</h2>
                <div className='flex-column w-100 form-input'>
                    <label htmlFor='name' className='text-dark font-roboto align-left'>Name</label>
                    <input id='name' name='name' type="text" value={userName} className='input text-dark font-roboto ' onChange={changeUserNameHandler} />
                    {!isNameFilled && <ErrorDialog message={'Please fill the user name'} />}
                </div>
                <div className='flex-column w-100 form-input'>
                    <label htmlFor='age' className='text-dark font-roboto align-left'>Age</label>
                    <input id='age' name='age' type="number" vale={userAge} className='input text-dark font-roboto' onChange={changeUserAgeHandler} />
                    {!isAgeFilled && <ErrorDialog message={'Please fill the age'} />}
                    {isAgeEditted && !isAgeValid && <ErrorDialog message={'Age should be greater than 0'} />}
                </div>
                <button type='submit' className='submit-button align-right font-roboto'>Add User</button>
            </div>
        </form>
    );

};

export default UserInfoForm;