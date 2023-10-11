import { useState } from 'react';
import Link from 'next/link';
import Header from '../header/Header'; // Import Header component
import SearchBar from '../search/SearchBar'; // Import SearchBar component
import PageButton from '../buttons/PageButton'; // Import PageButton component
import Button from '../buttons/Button';

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
        <div className='flex flex-col bg-[#0A0903] text-white'>
            <Header />
            <SearchBar />
            <div className='h-fit'>
            <table className="w-full divide-y divide-[#FFC100]">
                <thead className="bg-[#F4F3EE]">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[#0A0903] uppercase tracking-wider">Album Art</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[#0A0903] uppercase tracking-wider">Title</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[#0A0903] uppercase tracking-wider">Year</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[#0A0903] uppercase tracking-wider">Genre</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[#0A0903] uppercase tracking-wider">Country</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[#0A0903] uppercase tracking-wider"></th>
                    </tr>
                </thead>
                <tbody className="bg-[#9AC2C5] divide-y divide-[#FF0000]">
                    {currentPlaylists.map((playlist) => (
                        <tr key={playlist.id}>
                            <td className="px-4 py-4 whitespace-nowrap">
                                <Link href={`https://www.discogs.com${playlist.uri}`} target="_blank" className="cursor-pointer hover:text-black">
                                        <img src={playlist.cover_image} alt="album art" className="w-24 h-auto" />
                                </Link>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <Link href={`https://www.discogs.com${playlist.uri}`} target="_blank" className="cursor-pointer hover:text-black text-center text-sm truncate">
                                        {playlist.title}
                                </Link>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <Link href={`https://www.discogs.com${playlist.uri}`} target="_blank" className="cursor-pointer hover:text-black text-center text-sm truncate">
                                        {playlist.year}
                                </Link>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <Link href={`https://www.discogs.com${playlist.uri}`} target="_blank" className="cursor-pointer hover:text-black text-center text-sm truncate">
                                        {playlist.genre}
                                </Link>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <Link href={`https://www.discogs.com${playlist.uri}`} target="_blank" className="cursor-pointer hover:text-black text-center text-sm truncate">
                                        {playlist.country}
                                </Link>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <Button text="Add to Want List" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
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
