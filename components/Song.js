import useSpotify from '@/hooks/useSpotify';
import { millisToMinutesAndSecs } from '@/lib/time';
import { ThumbUpIcon, ThumbDownIcon } from '@heroicons/react/outline';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';

const Song = ({ order, track }) => {
  const clientId = process.env.REACT_APP_DISCOGS_ID;
  const clientSecret = process.env.REACT_APP_DISCOGS_SECRET;
  const spotifyAPI = useSpotify();

  const [vinyls, setVinyls] = useState([]);
  const [showVinyls, setShowVinyls] = useState(false);
  const vinylsRef = useRef(null);

  function songHasVinyl(track) {
    const artist = track.artists[0].name;
    const trackName = track.name;

    // Check if response is available in local storage
    const cacheKey = `${artist}_${trackName}`;
    const cachedResponse = localStorage.getItem(cacheKey);

    if (cachedResponse) {
      const parsedResponse = JSON.parse(cachedResponse);
      setVinyls(parsedResponse.results);
    } else {
      axios
        .get(`/api/discogsSearch`, {
          params: {
            q: artist,
            track: trackName,
            format: 'vinyl',
            key: "kmbBnKnOTfCcOfcDVgCX",
            secret: "TUblFjzOalqushLQoSDOyFMMUYgqxghd",
          },
        })
        .then(response => {
          console.log(response.data.results);
          setVinyls(response.data.results);
          // Store response in local storage
          localStorage.setItem(cacheKey, JSON.stringify(response.data));
        })
        .catch(error => {
          if (error.response && error.response.status === 404) {
            console.log('No vinyls found');
          } else {
            console.log('Failed to get Vinyls', error);
          }
        });
    }
  }

  useEffect(() => {
    songHasVinyl(track);
  }, [track]);

  useEffect(() => {
    if (showVinyls) {
      vinylsRef.current.style.maxHeight = `${vinylsRef.current.scrollHeight}px`;
    } else {
      vinylsRef.current.style.maxHeight = '0';
    }
  }, [showVinyls]);

  return (
    <div className='grid grid-cols-2 text-gray-500 hover:bg-gray-900 py-3 px-4 rounded-lg'>
      <div className='flex items-center space-x-4'>
        <p>{order + 1}</p>
        <a href={track.album.external_urls.spotify} target='_blank'>
          <img className='h-12 w-12' src={track.album.images[0].url} alt={track.name} />
        </a>
        <div>
          <p className='w-36 lg:w-64 truncate text-white'>{track.name}</p>
          <p className='w-40'>{track.artists[0].name}</p>
        </div>
      </div>

      <div>
        {vinyls.length > 0 ? (
          <div className='flex items-center justify-between ml-auto md:ml-0'>
            <p className='hidden md:inline w-40'>{track.album.name}</p>
            <p className='md:inline px-5 hidden'>{millisToMinutesAndSecs(track.duration_ms)}</p>
            <a href={track.external_urls.spotify} target='_blank'>
              <img className='w-10 p-1' src='https://links.papareact.com/9xl' alt='spotify_logo' />
            </a>
            <ThumbUpIcon className='w-10 p-1 text-[#18D860]' onClick={() => setShowVinyls(!showVinyls)}/>
          </div>
        ) : (
          <div className='flex items-center justify-between ml-auto md:ml-0'>
            <p className='hidden md:inline w-40'>{track.album.name}</p>
            <p className='md:inline px-5 hidden'>{millisToMinutesAndSecs(track.duration_ms)}</p>
            <a href={track.external_urls.spotify} target='_blank'>
              <img className='w-10 p-1' src='https://links.papareact.com/9xl' alt='spotify_logo' />
            </a>
            <ThumbDownIcon className='w-10 p-1 text-red-500' />
          </div>
        )}
      </div>
      <div
        className='grid grid-cols-1 overflow-hidden transition-max-height duration-300'
        ref={vinylsRef}
        style={{ maxHeight: showVinyls ? '1000px' : '0' }}
      >
        {showVinyls &&
          vinyls.length > 0 &&
          vinyls.map((vinyl) => (
            <a href={`https://www.discogs.com${vinyl.uri}`} target='_blank' key={vinyl.id}>
              <p className='py-1 w-full'>{vinyl.title}</p>
            </a>
          ))}
      </div>
    </div>
  );
};

export default Song;