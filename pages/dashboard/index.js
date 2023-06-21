import React from 'react'
import {useSession, signOut} from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Playlist from '../components/Playlist';

const Dashboard = () => {
  const router = useRouter();
  const {data: session} = useSession();
  const [list, setList] = useState([]);

  const getMyPlaylists = async () => {
    const res = await fetch('/api/playlist');
    const {items} = await res.json();
    setList(items);
  };

  useEffect(() => {
    if (!session) {
      router.replace('/'); // Redirect to the index page for sign-in
    }
  }, [session, router]);

  if (session) {
    return (
      <>
        <main className='items-center h-screen w-full'>
          <span>Dashboard Goes Here!</span> <br/>
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
        </main>
      </>
    );
  }

  return null; // Or render a loading spinner or any other content while waiting for the redirection
};

export default Dashboard