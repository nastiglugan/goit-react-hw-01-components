import user from '../user';
import data from '../data';
import friends from '../data';
// import { Profile } from './Profile/Profile';
// import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';

export const App = () => {
  return (
    <>
      {/* <Profile user={user} /> */}
      {/* <Statistics data={data} /> */}
      <FriendList friends={friends} />
    </>
  );
};

// <div
//   style={{
//     height: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     fontSize: 40,
//     color: '#010101',
//   }}
// >
//   React homework template
// </div>
