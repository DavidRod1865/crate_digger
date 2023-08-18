import React, { useEffect, useState } from 'react';
import { HomeIcon, SearchIcon, LibraryIcon, HeartIcon, PlusCircleIcon, RssIcon } from "@heroicons/react/outline";
import { useSession } from 'next-auth/react';
import useSpotify from '../hooks/useSpotify';
import { useRecoilState } from 'recoil';
import { playlistIdState } from '../atoms/playlistAtom';
import Link from 'next/link';

const Sidebar = () => {
  const spotifyAPI = useSpotify();
  const { data: session, status } = useSession();
  const [playlists, setPlaylists] = useState([]);
  const [playlistID, setPlaylistID] = useRecoilState(playlistIdState);
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  useEffect(() => {
    // Function to check if the screen is in mobile view
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // You can adjust the breakpoint (768) as per your requirement
    };

    // Check on initial mount
    checkIsMobile();

    // Add event listener to check on window resize
    window.addEventListener('resize', checkIsMobile);

    return () => {
      // Clean up the event listener on unmount
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  useEffect(() => {
    if (spotifyAPI.getAccessToken()) {
      spotifyAPI.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items);
      });
    }
  }, [session, spotifyAPI]);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
<>
    {isMobile && (
      <button
        className="fixed right-2 top-2 z-50 bg-gray-900 p-2 rounded-md text-white"
        onClick={toggleSidebar}
      >
        {isSidebarVisible ? "Hide" : "Show"} Sidebar
      </button>
    )}
        <div
        className={`text-gray-500 p-5 text-xs lg:text-sm border-r border-gray-900 overflow-y-scroll h-screen scroll-bar-hide sm:max-w-[12rem] lg:max-w-[15rem] ${
          isMobile ? "fixed top-0 left-0 transform transition-transform ease-in-out duration-300" : ""
        } ${isSidebarVisible ? "translate-x-0" : "-translate-x-full"} ${
          isSidebarVisible && isMobile ? "z-50 bg-black text-gray-500 shadow-lg" : "z-0"
        }`}
        onClick={isMobile ? toggleSidebar : undefined}
      >
        <div className="space-y-4">
          <Link href="/">
            <button className='flex items-center space-x-2 hover:text-white'>
              <HomeIcon className="h-5 w-5" />
              <p>Home</p>
            </button>
          </Link>
        <button className='flex items-center space-x-2 hover:text-white'>
          <SearchIcon className="h-5 w-5" />
          <p>Search</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <LibraryIcon className="h-5 w-5" />
          <p>Your Playlists</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />

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

        <hr className="border-t-[0.1px] border-gray-900" />

        {playlists.map((playlist) => (
          <p key={playlist.id} onClick={() => setPlaylistID(playlist.id)} className='cursor-pointer hover:text-white'>
            {playlist.name}
          </p>
        ))}
        
      </div>
    </div>
    {isMobile && isSidebarVisible && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black text-white z-40"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;