import {useSession, signIn, signOut} from 'next-auth/react';
import { useState } from 'react';
import Playlist from './components/Playlist';

export default function Home() {
  const {data: session} = useSession();
  const [list, setList] = useState([]);

  const getMyPlaylists = async () => {
    const res = await fetch('/api/playlist');
    const {items} = await res.json();
    setList(items);
  };

  if (session) {
    return (
      <>
        Signed in as {session?.token?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
        <hr />
        <button onClick={() => getMyPlaylists()}>Get all my playlists</button>
        <div className='flex m-4 flex-wrap'>
        {list.map((item) => (
          <Playlist 
          key={item.id}
          id={item.id}
          imageUrl={item.images[0]?.url}
          name={item.name}
          playlistUrl={item.external_urls.spotify}
          />
        ))}
        </div>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
