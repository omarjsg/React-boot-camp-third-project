import Card from '../UI/Card/Card';
import './UserInfoList.css';
import UserInfo from '../UserInfo/UserInfo';
const UserInfoList = props => {
    return (
        <Card type='1'>
            <div className='flex-column gap-1'>
                <h2 className='text-dark title font-roboto align-left'>Users List</h2>
                {props.usersList.length > 0 ? props.usersList.map(user => {
                    return (<UserInfo key={user.id} name={user.name} age={user.age} />);
                }) : <p className='text-dark font-roboto'>No users registered, maybe add one?</p>
                }
            </div>
        </Card>);
};

export default UserInfoList;