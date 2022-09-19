import { PageTitle } from 'components/PageTitle/PageTitle';
import { UserBox } from 'components/UserBox/UserBox';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import user from './json/user.json';
import data from './json/data.json';
import friends from './json/friends.json';

export const App = () => {
  return (
    <>
      <PageTitle text="App User Card" />
      <UserBox />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList title="Friends List" friends={friends} />
    </>
  );
};
