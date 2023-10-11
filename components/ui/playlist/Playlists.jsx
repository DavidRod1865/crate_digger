import { useState } from 'react';
import Link from 'next/link';
import { playlistState } from '../../../atoms/playlistAtom';
import { useRecoilState } from 'recoil';
import PageButton from '../buttons/PageButton';

const Playlists = ({ playlists }) => {

    // Pagination
    const perPage = 8;
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the start and end indexes for the current page
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;

    // Filter the playlists for the current page
    const currentPlaylists = playlists.slice(startIndex, endIndex);
    const totalPages = Math.ceil(playlists.length / perPage);

    // recoil state for clicked playlist
    const [playlistID, setPlaylistID] = useRecoilState(playlistState);

    return (
        <div>
            <div className='h-fit'>
              <div className="grid grid-cols-2 gap-6 p-8 md:grid-cols-4">
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
    )
}

export default Playlists