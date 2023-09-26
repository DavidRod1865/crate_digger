import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import useSpotify from '../../hooks/useSpotify';
import { useRecoilState } from 'recoil';
import { playlistIdState } from '../../atoms/playlistAtom';
import Link from 'next/link';
import PageButton from '../../components/ui/buttons/PageButton';
import Header from '../ui/header/Header';
import SearchBar from '../ui/search/SearchBar';

const Dashboard = () => {
    const spotifyAPI = useSpotify();
    const { data: session, status } = useSession();
    const [playlists, setPlaylists] = useState([]);
    const [playlistID, setPlaylistID] = useRecoilState(playlistIdState);
    const [user, setUser] = useState(null);

  // console.log(playlists)

  useEffect(() => {
    if (spotifyAPI.getAccessToken()) {
      spotifyAPI.getMe()
        .then((data) => {
          setUser(data.body);
          // console.log(data.body);
        });
    }
  }, [session, spotifyAPI]);

    useEffect(() => {
        if (spotifyAPI.getAccessToken()) {
          spotifyAPI.getUserPlaylists().then((data) => {
            setPlaylists(data.body.items);
          });
        }
    }, [session, spotifyAPI]);

    const perPage = 8; // Number of playlists to display per page
    const [currentPage, setCurrentPage] = useState(1);
  
    // Calculate the start and end indexes for the current page
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
  
    // Filter the playlists for the current page
    const currentPlaylists = playlists.slice(startIndex, endIndex);
  
    const totalPages = Math.ceil(playlists.length / perPage);
  

    return (
        <div className='flex flex-col p-8'>
        <Header />
        <SearchBar />
        <div className='h-fit'>
          <div className="grid grid-cols-4 gap-4 p-6">
              {currentPlaylists.map((playlist) => (
              <Link key={playlist.id} href={`/album/${playlist.id}`}>
                  <div key={playlist.id} onClick={() => setPlaylistID(playlist.id)} className="cursor-pointer hover:text-white">
                      <img src={playlist.images[0].url} alt="album art" className="max-w-full" />
                      <p className="text-center text-sm truncate">{playlist.name}</p>
                  </div>
              </Link>
              ))}
          </div>
        </div>
        <PageButton 
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    );
};

export default Dashboard;