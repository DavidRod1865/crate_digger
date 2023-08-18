import React, { useState } from 'react';
import { playlistState } from '../atoms/playlistAtom';
import { useRecoilValue } from 'recoil';
import Song from './Song';

const Songs = () => {
  const playlist = useRecoilValue(playlistState);
  const itemsPerPage = 10;
  const totalPages = Math.ceil((playlist?.tracks?.items.length || 0) / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const getCurrentPlaylist = () => {
    if (!playlist || !playlist.tracks || !playlist.tracks.items) return [];
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return playlist?.tracks?.items.slice(startIndex, endIndex);
  };

  // console.log(getCurrentPlaylist()[0])
  // console.log(playlist?.tracks.items)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
      <div className='md:px-8 flex flex-col space-y-1 pb-28 text-white'>
        {getCurrentPlaylist().map((track, i) => (
          <Song key={track.track.id} order={i} track={track.track} />
        ))}
      <div className='flex justify-center mt-[1rem] gap-[0.5rem]'>
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
  );
};

export default Songs;
