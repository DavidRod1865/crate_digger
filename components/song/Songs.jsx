import React, { useState } from 'react';
import { playlistState } from '../../atoms/playlistAtom';
import { useRecoilValue } from 'recoil';
import Song from './Song';
import PageButton from '../ui/buttons/PageButton';

const Songs = () => {

  // Get current playlist
  const playlist = useRecoilValue(playlistState);
  const getCurrentPlaylist = () => {
    if (!playlist || !playlist.tracks || !playlist.tracks.items) return [];
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return playlist?.tracks?.items.slice(startIndex, endIndex);
  };
  
  // Pagination
  const itemsPerPage = 10;
  const totalPages = Math.ceil((playlist?.tracks?.items.length || 0) / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='md:px-8 flex flex-col space-y-1 pb-28 text-white'>
        {getCurrentPlaylist().map((track, i) => (
          <Song key={track.track.id} order={i} track={track.track} />
        ))}
      <PageButton
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={handlePageChange} // Pass the handler function
      />
    </div>
  );
};

export default Songs;
