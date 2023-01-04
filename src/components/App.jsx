import user from '../user';
import data from '../data';
import friends from '../friends';
import transactions from '../transactions';
// import { Profile } from './Profile/Profile';
// import { Statistics } from './Statistics/Statistics';
// import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      {/* <Profile user={user} /> */}
      {/* <Statistics data={data} title="Upload stats" /> */}
      {/* <FriendList friends={friends} /> */}
      <TransactionHistory transactions={transactions} />
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
// </div>;
