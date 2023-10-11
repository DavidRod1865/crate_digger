import React, { useEffect, useState } from 'react';
import { HomeIcon, LibraryIcon, HeartIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { useSession } from 'next-auth/react';
import useSpotify from '../../hooks/useSpotify';
import Link from 'next/link';

const Sidebar = () => {
  const spotifyAPI = useSpotify();
  const { data: session, status } = useSession();
  
  // get user playlists
  const [playlists, setPlaylists] = useState([]);
  useEffect(() => {
    if (spotifyAPI.getAccessToken()) {
      spotifyAPI.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items);
      });
    }
  }, [session, spotifyAPI]);

  return (
    <div className={`text-gray-500 p-5 text-xs md:text-sm border-r border-blue-500 overflow-y-scroll h-screen scroll-bar-hide hidden md:block md:min-w-[12rem]`}>
        <div className="space-y-4">
          <Link href="/">
            <button className='flex items-center space-x-2 hover:text-white'>
              <HomeIcon className="h-5 w-5" />
              <p>Home</p>
            </button>
          </Link>
        <button className='flex items-center space-x-2 hover:text-white'>
          <LibraryIcon className="h-5 w-5" />
          <p>Your Playlists</p>
        </button>

        <button className='flex items-center space-x-2 hover:text-white'>
          <PlusCircleIcon className="h-5 w-5" />
          <p>Create Playlist</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <HeartIcon className="h-5 w-5" />
          <p>Liked Songs</p>
        </button>

        <hr className="border-b-[0.1px] border-blue-500" />

        {playlists.map((playlist) => (
          <p key={playlist.id} onClick={() => setPlaylistID(playlist.id)} className='cursor-pointer hover:text-white'>
            {playlist.name}
          </p>
        ))}
        
      </div>
    </div>
  );
};

export default Sidebar;