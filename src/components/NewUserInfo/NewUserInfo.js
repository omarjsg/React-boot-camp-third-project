import Card from '../UI/Card/Card';
import UserInfoForm from '../UserInfoForm/UserInfoForm';
import './NewUserInfo.css'

const NewUserInfo = props => {

    const onUserInfoFormSubmit = userInfo => {
        props.onUserInfoSubmit(userInfo)
    }

    return (
        <Card type='1'>
            <UserInfoForm onUserInfoSubmit={onUserInfoFormSubmit} />
        </Card>
    );

};

export default NewUserInfo;