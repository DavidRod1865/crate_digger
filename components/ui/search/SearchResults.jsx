import { useState } from 'react';
import Link from 'next/link';
import Header from '../header/Header'; // Import Header component
import SearchBar from '../search/SearchBar'; // Import SearchBar component
import PageButton from '../buttons/PageButton'; // Import PageButton component

const SearchResults = ({ results }) => {
    const [playlists, setPlaylists] = useState(results);
    const [user, setUser] = useState(null);

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
                    <div key={playlist.id} className="cursor-pointer hover:text-white">
                        <img src={playlist.cover_image} alt="album art" className="max-w-full" />
                        <p className="text-center text-sm truncate">{playlist.title}</p>
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

export default SearchResults;