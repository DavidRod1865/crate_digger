import useSpotify from '@/hooks/useSpotify';
import { millisToMinutesAndSecs } from '@/lib/time';
import { ThumbUpIcon, ThumbDownIcon, PlusCircleIcon } from '@heroicons/react/outline';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';

const Song = ({ order, track }) => {
  const clientId = process.env.REACT_APP_DISCOGS_ID;
  const clientSecret = process.env.REACT_APP_DISCOGS_SECRET;
  const spotifyAPI = useSpotify();
  const itemsPerPage = 5;

  const [currentPage, setCurrentPage] = useState(1);
  const [vinyls, setVinyls] = useState([]);
  const [showVinyls, setShowVinyls] = useState(false);
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
          // console.log(response.data.results);
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

  // console.log(vinyls)

  useEffect(() => {
    if (showVinyls) {
      vinylsRef.current.style.maxHeight = `${vinylsRef.current.scrollHeight}px`;
    } else {
      vinylsRef.current.style.maxHeight = '0';
    }
  }, [showVinyls]);

  return (
    <>
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

      <div className='flex items-center'>
        {vinyls.length > 0 ? (
          <div className='flex items-center justify-between ml-auto md:ml-0'>
            <p className='hidden md:inline w-40'>{track.album.name}</p>
            <p className='md:inline px-5 hidden'>{millisToMinutesAndSecs(track.duration_ms)}</p>
            <a href={track.external_urls.spotify} target='_blank'>
              <img className='w-10 p-1' src='https://links.papareact.com/9xl' alt='spotify_logo' />
            </a>
            <ThumbUpIcon className='w-10 px-1 text-[#18D860]' onClick={() => setShowVinyls(!showVinyls)}/>
          </div>
        ) : (
          <div className='flex items-center justify-between ml-auto md:ml-0'>
            <p className='hidden md:inline w-40'>{track.album.name}</p>
            <p className='md:inline px-5 hidden'>{millisToMinutesAndSecs(track.duration_ms)}</p>
            <a href={track.external_urls.spotify} target='_blank'>
              <img className='w-10 p-1' src='https://links.papareact.com/9xl' alt='spotify_logo' />
            </a>
            <ThumbDownIcon className='w-10 px-1 text-red-500' />
          </div>
        )}
      </div>
      </div>

      <div
        className='overflow-hidden transition-max-height duration-300 flex flex-col justify-between w-full text-gray-500 bg-gray-900 rounded-lg'
        ref={vinylsRef}
        style={{ maxHeight: showVinyls ? '1000px' : '0' }}
        >
        {showVinyls &&
          vinyls.length > 0 &&
          getCurrentVinyls().map((vinyl) => (
            <div className='flex items-center justify-between hover:text-white px-3'>
              <a className="flex-1 pr-3"href={`https://www.discogs.com${vinyl.uri}`} target='_blank' key={vinyl.id}>
                <div className='py-2.5 flex items-center justify-between'>
                  <span>{vinyl.title}</span>
                  <span>{vinyl.format[0]}</span>
                </div>
              </a>
              <PlusCircleIcon className='w-10 ml-auto px-1' />
            </div>
          ))
        }
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
    </>
  );
};

export default Song;