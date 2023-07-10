import React, { useEffect, useState } from 'react'
import { HomeIcon, SearchIcon, LibraryIcon, HeartIcon, PlusCircleIcon, RssIcon } from "@heroicons/react/outline"
import { useSession } from 'next-auth/react';
import useSpotify from '@/hooks/useSpotify';
import { useRecoilState } from 'recoil';
import { playlistIdState } from '@/atoms/playlistAtom';

const Sidebar = () => {
  const spotifyAPI = useSpotify()
  const { data: session, status } = useSession();
  const [playlists, setPlaylists] = useState([])
  const [playlistID, setPlaylistID] = useRecoilState(playlistIdState)

  useEffect(() => {
    if(spotifyAPI.getAccessToken()){
      spotifyAPI.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items)
      })
    }
  }, [session, spotifyAPI])

  return (
    <div className='text-gray-500 p-5 text-xs lg:text-sm border-r border-gray-900 overflow-y-scroll h-screen scroll-bar-hide sm:max-w-[12rem] lg:max-w-[15rem] hidden md:inline-flex'>
      <div className='space-y-4'>
        <button className='flex items-center space-x-2 hover:text-white'>
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <SearchIcon className="h-5 w-5" />
          <p>Search</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <LibraryIcon className="h-5 w-5" />
          <p>Your Playlists</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900"/>

        <button className='flex items-center space-x-2 hover:text-white'>
          <PlusCircleIcon className="h-5 w-5" />
          <p>Create Playlist</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <HeartIcon className="h-5 w-5" />
          <p>Liked Songs</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <RssIcon className="h-5 w-5" />
          <p>Your Episodes</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900"/>

        {playlists.map((playlist) => (
          <p key={playlist.id} onClick={() => setPlaylistID(playlist.id)} className='cursor-pointer hover:text-white'>
            {playlist.name}
          </p>
          ))
        }
      </div>
    </div>
  );
}

export default Sidebar