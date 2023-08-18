import useSpotify from '../hooks/useSpotify';
import { millisToMinutesAndSecs } from '../lib/time';
import { ThumbUpIcon, ThumbDownIcon, PlusCircleIcon, ChevronDoubleDownIcon, XIcon } from '@heroicons/react/outline';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';

const Song = ({ order, track }) => {
  const spotifyAPI = useSpotify();
  const itemsPerPage = 5;

  const [currentPage, setCurrentPage] = useState(1);
  const [vinyls, setVinyls] = useState([]);
  const [showVinyls, setShowVinyls] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDivClicked, setIsDivClicked] = useState(false);
  const vinylsRef = useRef(null);

  const totalPages = Math.ceil(vinyls.length / itemsPerPage);

  const getCurrentVinyls = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return vinyls.slice(startIndex, endIndex);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  function songHasVinyl(track) {
    const artist = track.artists[0].name;
    const trackName = track.name;
    const albumName = track.album;
    const cacheKey = `${artist}_${trackName}`;
    const cachedResponse = localStorage.getItem(cacheKey);
  
    if (cachedResponse) {
      const parsedResponse = JSON.parse(cachedResponse);
      setVinyls(parsedResponse.results);
    } else {
      const makeApiCall = () => {
        axios
          .get(`/api/discogsSearch`, {
            params: {
              q: artist,
              track: trackName,
              album: albumName,
              format: 'vinyl',
              key: process.env.NEXT_PUBLIC_DISC_ID,
              secret: process.env.NEXT_PUBLIC_DISC_SECRET,
            },
          })
          .then(response => {
            setVinyls(response.data.results);
            localStorage.setItem(cacheKey, JSON.stringify(response.data));
          })
          .catch(error => {
            if (error.response && error.response.status === 404) {
              console.log('No vinyls found');
            } else {
              console.log('Failed to get Vinyls', error);
            }
          });
      };
  
      // Check if the current minute's API call count exceeds the limit
      const currentTime = new Date();
      const currentMinute = currentTime.getMinutes();
      const lastApiCallMinute = parseInt(localStorage.getItem('lastApiCallMinute'), 10);
  
      if (!lastApiCallMinute || lastApiCallMinute !== currentMinute) {
        localStorage.setItem('lastApiCallMinute', currentMinute);
        localStorage.setItem('apiCallCount', '1');
        makeApiCall();
      } else {
        const apiCallCount = parseInt(localStorage.getItem('apiCallCount'), 10) || 0;
  
        if (apiCallCount >= 60) {
          setIsLoading(true);
          axios
            .get(`/api/discogsSearch`, {
              params: {
                q: artist,
                track: trackName,
                album: albumName,
                format: 'vinyl',
                key: process.env.NEXT_PUBLIC_DISC_ID,
                secret: process.env.NEXT_PUBLIC_DISC_SECRET,
              },
            })
            .then(response => {
              setIsLoading(false);
              if (response.status === 200) {
                setVinyls(response.data.results);
                localStorage.setItem(cacheKey, JSON.stringify(response.data));
              }
            })
            .catch(error => {
              setIsLoading(false);
              if (error.response && error.response.status === 404) {
                console.log('No vinyls found');
              } else {
                console.log('Failed to get Vinyls', error);
              }
            });
        } else {
          localStorage.setItem('apiCallCount', (apiCallCount + 1).toString());
          makeApiCall();
        }
      }
    }
  }

  useEffect(() => {
    songHasVinyl(track);
  }, [track]);

  // console.log(vinyls)

  useEffect(() => {
    if (showVinyls) {
      vinylsRef.current.style.maxHeight = `${vinylsRef.current.scrollHeight}px`;
    } else {
      vinylsRef.current.style.maxHeight = '0';
    }
  }, [showVinyls]);

  return (
    <div className='flex flex-col'>
    <div className={`grid grid-cols-2 text-gray-500 ${
      isDivClicked==true ? 'bg-gray-900' : 'hover:bg-gray-900'
      } py-3 px-4 rounded-lg`}
      onClick={() => setIsDivClicked(!isDivClicked)}>

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

      <div className='flex items-center'>
        {vinyls.length > 0 ? (
          <div className='flex items-center justify-between ml-auto md:ml-0'>
            <p className='hidden md:inline w-40 truncate peer-hover:'>{track.album.name}</p>
            <p className='md:inline px-5 hidden'>{millisToMinutesAndSecs(track.duration_ms)}</p>
            <a href={track.external_urls.spotify} target='_blank'>
              <img className='w-10 p-1' src='https://links.papareact.com/9xl' alt='spotify_logo' />
            </a>
            <ChevronDoubleDownIcon className='w-10 p-1 text-[#18D860]' onClick={() => setShowVinyls(!showVinyls)}/>
          </div>
        ) : (
          <div className='flex items-center justify-between ml-auto md:ml-0'>
            <p className='hidden md:inline w-40'>{track.album.name}</p>
            <p className='md:inline px-5 hidden'>{millisToMinutesAndSecs(track.duration_ms)}</p>
            <a href={track.external_urls.spotify} target='_blank'>
              <img className='w-10 p-1' src='https://links.papareact.com/9xl' alt='spotify_logo' />
            </a>
            <XIcon className='w-10 p-1 text-red-500' />
          </div>
        )}
      </div>
    </div>

      <div
        className='overflow-hidden transition-max-height duration-300 flex flex-col justify-between w-full text-gray-500 bg-gray-900 rounded-b-lg mt-[-10px]'
        ref={vinylsRef}
        style={{ maxHeight: showVinyls ? '1000px' : '0', overflow: 'hidden'}}
        >
          {isLoading ? ( // Render the loading message if isLoading is true
          <div className="p-3">Loading...</div>
        ) : (
          // Render the vinyls when isLoading is false
          showVinyls &&
          vinyls.length > 0 &&
          getCurrentVinyls().map((vinyl) => (
            <div key={vinyl.id} className='flex items-center justify-between hover:text-white px-3 pt-1'>
              <a className="flex-1 pr-3" href={`https://www.discogs.com${vinyl.uri}`} target='_blank' key={vinyl.id}>
                <div className='py-2.5 grid grid-cols-6'>
                  <span className='col-span-3 truncate'>{vinyl.title}</span>
                  <span className='pl-10'>{vinyl.country}</span>
                  <span className='text-end'>{vinyl.year}</span>
                  <span className='text-end'>{vinyl.format[0]}</span>
                </div>
              </a>
              <PlusCircleIcon className='w-10 ml-auto px-1' />
            </div>
          ))
        )}
      <div className='flex justify-center mt-[1rem] gap-[0.5rem] mb-3'>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
          key={index}
          className={`w-8 h-8 border-[#ccc] border-solid rounded-full text-black bg-[#fff] cursor-pointer active:bg-[#007bff] active:text-[#fff] ${currentPage === index + 1 ? 'active' : ''}`}
          onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
        </div>
    </div>
  );
};

export default Song;