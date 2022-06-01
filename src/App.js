import { useState } from 'react';
import './App.css';
import NewUserInfo from './components/NewUserInfo/NewUserInfo';
import UserInfoList from './components/UserInfoList/UserInfoList';

let idCounter = 0;

function App() {

  const [usersList, setUserList] = useState([]);

  const onUserInfoFormSubmit = userInfo => {
    let id = idCounter++;
    userInfo = {
      id: id,
      ...userInfo
    };
    setUserList(prevUsers => {
      return [userInfo, ...prevUsers];
    });
    console.log(usersList)
  };

  return (
    <div>
      <section id='new-user-input' className='flex-column gap-1 py-2 px'>
        <NewUserInfo onUserInfoSubmit={onUserInfoFormSubmit} />
      </section>
      <section id='users-list' className='flex-column gap-1 px'>
        <UserInfoList usersList={usersList} />
      </section>
    </div>
  );
}

export default App;
