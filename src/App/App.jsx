import { PageTitle } from 'components/PageTitle/PageTitle';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import user from '../json/user.json';
import data from '../json/data.json';
import friends from '../json/friends.json';
import transactions from '../json/transactions.json';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <PageTitle text="App User Card" />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList title="Friends List" friends={friends} />
      <TransactionHistory title="Transactions History" items={transactions} />
    </Container>
  );
};
