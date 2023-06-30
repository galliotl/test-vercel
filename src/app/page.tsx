import type { Result } from './types';
import { UserCard } from './UserCard';
import { HomeView } from './view';

const getUser = async (): Promise<Result> => {
  const res = await fetch('https://randomuser.me/api/', {cache: 'no-store'});
  return res.json();
}

export default async function Home() {
  const {results} = await getUser();
  return (
    <HomeView>
      <UserCard {...results[0]} />
    </HomeView>
  )
}
