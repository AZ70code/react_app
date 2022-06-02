
import UserSessionInfo from './User_session';

const Avatar = ({avatar, name}) => {
    return (
        <img className="avatar"
        src={avatar}
        alt={name}/>
    );
}
  
const UserInfo = ({name, email, city, dob}) => {
    return (
        <ul className='user-list'>
            <li className='user-email'>Email: {email}</li>
            <li className='user-name'>Name: {name}</li>
            <li className='user-city'>City: {city}</li>
            <li className='user-dob'>Dob: {dob}</li>
        </ul>
    );
}

const User = ({user}) => {
    return (
        <div className='user'>
            <div className='user-avatar'><Avatar avatar = {user.avatar} name = {user.name}/></div>
            <div className='user-info'><UserInfo name = {user.name} city = {user.city} dob = {user.dob}/></div>
            <div className='user-start'><UserSessionInfo date = {user.date}/></div>
        </div>
    );
}


export default User;
