import React from 'react'
import {useSession, signOut} from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState, useEffect, useMemo } from 'react';
import Playlist from '@/components/Playlist';
import Profile from '@/components/Profile';
import Tracks from '@/components/Tracks';
import Sidebar from '@/components/Sidebar';

const Dashboard = () => {
  const router = useRouter();
  const {data: session} = useSession();
  const [list, setList] = useState([]);
  const [displayCount, setDisplayCount] = useState(6);
  const [selectedPlaylistSongs, setSelectedPlaylistSongs] = useState([]);

  const getMyPlaylists = async () => {
    const res = await fetch('/api/playlist'); // calls playlists from Spotify
    const {items} = await res.json();
    setList(items);
    localStorage.setItem('playlists', JSON.stringify(items)); // sets playlist to local storage
  };

  const handleLoadMore = () => {
    setDisplayCount(displayCount + 6); // updates playlist count + 6
  };

  // gets playlists from local storage, if not playlist, then it will call the getMyPlaylists function
  useEffect(() => {
    const storedPlaylists = localStorage.getItem('playlists');
    if (storedPlaylists) {
      setList(JSON.parse(storedPlaylists)); 
    } else {
      getMyPlaylists();
    }
  }, []);

  const memoizedPlaylists = useMemo(() => {
    return list.slice(0, displayCount);
  }, [list, displayCount]);

  const handlePlaylistClick = async (key) => {
    try {
      const playlist = list.find(item => item.id === key);
      const res = await fetch(`/api/tracks/${playlist.id}/songs`);
      const { songs } = await res.json();
      setSelectedPlaylistSongs(songs);
    } catch (error) {
      console.error('Error fetching playlist songs:', error);
    }
  };

  // Redirect to the index page for sign-in if the user is not logged in
  useEffect(() => {
    if (!session) {
      router.replace('/'); 
    }
  }, [session, router]);

  if (session) {
    return (
      <div className=''>
        <main>      
          <h1>Dashboard</h1> 
          <Sidebar />
          {/* {Center} */}
        </main>

        <div>
          {/* {Player} */}
        </div>

        <button onClick={() => signOut()}>Sign out</button>
          {/* 
          <hr />
          <button onClick={() => getMyPlaylists()}>Get all my playlists</button>
          <div className='flex m-4 flex-wrap'>
            {memoizedPlaylists.map((item) => (
              <Playlist 
                key={item.id}
                playlistId={item.id}
                imageUrl={item.images[0]?.url}
                name={item.name}
                onPlaylistClick={handlePlaylistClick}
              />
            ))}
            {list.length > displayCount && (
            <button onClick={handleLoadMore}>Load More</button>
            )}
          </div>
          <section>
            <Tracks songs={selectedPlaylistSongs} />
          </section> */}
      </div>
    );
  }

  return null; // Or render a loading spinner or any other content while waiting for the redirection
};

export default Dashboard