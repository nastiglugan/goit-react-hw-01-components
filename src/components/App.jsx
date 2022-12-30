import user from '../user';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <Profile user={user} />

    // <Statistics data={data} />
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
