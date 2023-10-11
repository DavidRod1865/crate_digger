import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import useSpotify from '../../hooks/useSpotify';
import Header from '../ui/header/Header';
import SearchBar from '../ui/search/SearchBar';
import Sidebar from '../main/Sidebar';
import Playlists from '../ui/playlist/Playlists';

const Dashboard = () => {
  // get spotify api
  const spotifyAPI = useSpotify();
  // get session
  const { data: session, status } = useSession();
  
  // get user playlists
  const [playlists, setPlaylists] = useState([]);
  useEffect(() => {
      if (spotifyAPI.getAccessToken()) {
        spotifyAPI.getUserPlaylists().then((data) => {
          setPlaylists(data.body.items);
          console.log(data.body);
        });
      }
  }, [session, spotifyAPI]);

    return (
      <div className='flex'>
        <Sidebar />
        <div>
          <Header />
          <SearchBar />
          <Playlists playlists={playlists} />
        </div>
      </div>
    );
};

export default Dashboard;