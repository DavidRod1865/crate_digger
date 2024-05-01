import useSpotify from "../../hooks/useSpotify";
import {
  PlusCircleIcon,
  CheckIcon,
  XIcon,
} from "@heroicons/react/outline";
import axios from "axios";
import { useState, useEffect, useRef } from "react";

const Song = ({ track }) => {
  const spotifyAPI = useSpotify();
  const itemsPerPage = 5;

  const [currentPage, setCurrentPage] = useState(1);
  const [vinyls, setVinyls] = useState([]);
  const [showVinyls, setShowVinyls] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
              key: process.env.NEXT_PUBLIC_DISC_ID,
              secret: process.env.NEXT_PUBLIC_DISC_SECRET,
            },
          })
          .then((response) => {
            setVinyls(response.data.results);
            localStorage.setItem(cacheKey, JSON.stringify(response.data));
          })
          .catch((error) => {
            if (error.response && error.response.status === 404) {
              console.log("No vinyls found");
            } else {
              console.log("Failed to get Vinyls", error);
            }
          });
      };

      // Check if the current minute's API call count exceeds the limit
      const currentTime = new Date();
      const currentMinute = currentTime.getMinutes();
      const lastApiCallMinute = parseInt(
        localStorage.getItem("lastApiCallMinute"),
        10
      );

      if (!lastApiCallMinute || lastApiCallMinute !== currentMinute) {
        localStorage.setItem("lastApiCallMinute", currentMinute);
        localStorage.setItem("apiCallCount", "1");
        makeApiCall();
      } else {
        const apiCallCount =
          parseInt(localStorage.getItem("apiCallCount"), 10) || 0;

        if (apiCallCount >= 60) {
          setIsLoading(true);
          axios
            .get(`/api/discogsSearch`, {
              params: {
                q: artist,
                track: trackName,
                key: process.env.NEXT_PUBLIC_DISC_ID,
                secret: process.env.NEXT_PUBLIC_DISC_SECRET,
              },
            })
            .then((response) => {
              setIsLoading(false);
              if (response.status === 200) {
                setVinyls(response.data.results);
                localStorage.setItem(cacheKey, JSON.stringify(response.data));
              }
            })
            .catch((error) => {
              setIsLoading(false);
              if (error.response && error.response.status === 404) {
                console.log("No vinyls found");
              } else {
                console.log("Failed to get Vinyls", error);
              }
            });
        } else {
          localStorage.setItem("apiCallCount", (apiCallCount + 1).toString());
          makeApiCall();
        }
      }
    }
  }

  useEffect(() => {
    songHasVinyl(track);
  }, [track]);

  return (
      <tr key={track.id}>
      <td>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </td>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={track.album.images?.[0]?.url || 'path/to/default/image.jpg'} alt="Track Artwork" />
            </div>
          </div>
          <div>
            <div className="font-bold">{track.name}</div>
            <div className="text-sm opacity-50">{track.artists[0].name}</div>
          </div>
        </div>
      </td>
      <td>
        {track.album.name}
        <br />
        <span className="badge badge-ghost badge-sm">
          Release Date: {track.album.release_date}
        </span>
      </td>
      <td>
        {vinyls.length > 0 ? (
          <CheckIcon
            className="w-10 p-1 text-[#18D860]"
            onClick={() => setShowVinyls(!showVinyls)}
          />
        ) : (
          <XIcon className="w-10 p-1 text-red-500" />
        )}
      </td>
      <td>
        <button
          className="btn btn-ghost btn-xs"
          onClick={() => document.getElementById(`my_modal_${track.id}`).showModal()}
        >
          Vinyl Details
        </button>
        <dialog id={`my_modal_${track.id}`} className="modal">
          <div className="modal-box w-full">
            {vinyls.length == 0 ? (
              <h1 className="text-white">No Vinyl Details</h1>
            ) : (
              <>
                <h1 className="text-white">Vinyl Details</h1>
                {getCurrentVinyls().map((vinyl) => (
                  <div key={vinyl.id} className='flex items-center justify-between hover:text-white px-3 pt-1'>
                    <a href={`https://www.discogs.com${vinyl.uri}`} target='_blank' className='flex-1 pr-3'>
                      <div className='py-2.5 grid grid-cols-6'>
                        <span className='col-span-3 truncate'>{vinyl.title}</span>
                        <span className='pl-10'>{vinyl.country}</span>
                        <span className='text-end'>{vinyl.year}</span>
                        <span className='text-end'>{vinyl.format}</span>
                      </div>
                    </a>
                    <PlusCircleIcon className='w-10 ml-auto px-1' />
                  </div>
                ))}
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
              </>
            )}
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </td>
      <td>
        <a href={track.external_urls.spotify} target="_blank" rel="noopener noreferrer">
          <img className="w-10 p-1" src="https://links.papareact.com/9xl" alt="Spotify Logo" />
        </a>
      </td>
    </tr>
  );
};

export default Song;