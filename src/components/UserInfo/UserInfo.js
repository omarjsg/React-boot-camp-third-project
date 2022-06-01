import Card from '../UI/Card/Card';
import './UserInfo.css';
const UserInfo = props => {
    return (
        <Card type='2'>
            <div className='flex-row gap-1 no-wrap'>
                <div className='user-photo'></div>
                <div className='flex-column gap-1'>
                    <div className='text-dark font-roboto align-left'>
                        <span>Name: </span><span>{props.name}</span>
                    </div>
                    <div className='text-dark font-roboto align-left'>
                        <span>Age: </span><span>{props.age}</span>
                    </div>
                </div>
            </div>
        </Card>
    )
};

export default UserInfo;