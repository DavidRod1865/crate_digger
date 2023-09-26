import { useEffect, useState } from 'react';
import { shuffle } from 'lodash';
import { useRecoilState, useRecoilValue } from 'recoil';
import { playlistIdState } from '../../atoms/playlistAtom';
import Songs from '../../components/song/Songs';
import { useRouter } from 'next/router';
import useSpotify from '../../hooks/useSpotify';
import Header from '../../components/ui/header/Header';
import SearchBar from '../../components/ui/search/SearchBar';

const colors = [
  'from-red-500',
  'from-blue-500',
  'from-green-500',
  'from-yellow-500',
  'from-indigo-500',
  'from-purple-500',
  'from-pink-500',
  'from-orange-500',
  'from-teal-500',
  'from-cyan-500',
];

const AlbumPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const spotifyAPI = useSpotify();
    const defaultImage = '/recordImage.png';
    const [color, setColor] = useState(null);
    const [playlist, setPlaylist] = useRecoilState(playlistIdState);

    useEffect(() => {
      if (spotifyAPI.getAccessToken() && id) {
        spotifyAPI
          .getPlaylist(id)
          .then((data) => setPlaylist(data.body))
          .catch((err) => console.log('Playlist failed to load.', err));
      }
    }, [spotifyAPI, playlistIdState]);

    useEffect(() => {
      setColor(shuffle(colors)[0]);
    }, [id]);

    return (
      <>
      <div className='flex-grow h-screen w-screen overflow-y-scroll scrollbar-hide'>

      <section
        className={`flex flex-col space-x-7 h-fit p-8 bg-gradient-to-b to-black ${color}`}
        >
        <Header />
        <SearchBar />
        <div className='mt-1'>
          <img
            className='h-48 w-48 shadow-xl'
            src={playlist?.images?.[0]?.url || defaultImage}
            alt=''
            />
          <div>
            <p>PLAYLIST</p>
            <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold'>
              {playlist?.name}
            </h1>
          </div>
        </div>
      </section>
        <Songs />
    </div>        

          </>
  );
};

export default AlbumPage;
