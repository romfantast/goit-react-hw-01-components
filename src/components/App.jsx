import { UserProfile } from './Profile/UserProfile';
import user from '../user';
import { Statistics } from './Statistics/Statistics';
import stats from '../data';
import { FriendList } from './FriendList/FriendList';
import friends from '../friends';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../transactions';

export const App = () => {
  return (
    <>
      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={stats} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};
