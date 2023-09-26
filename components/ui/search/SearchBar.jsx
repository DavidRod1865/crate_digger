import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'; // Import useRouter from Next.js
import Button from "../buttons/Button"

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  // Use Next.js's useRouter hook
  const router = useRouter();

  const handleSearch = () => {
    if (!searchQuery) {
      return;
    }

    setLoading(true);

    axios
      .get(`/api/albumSearch`, {
        params: {
          q: searchQuery,
          key: process.env.NEXT_PUBLIC_DISC_ID,
          secret: process.env.NEXT_PUBLIC_DISC_SECRET,
        },
      })
      .then((response) => {
        setLoading(false);

        const searchResults = response.data.results;

        router.push({
          pathname: '/search',
          query: { results: JSON.stringify(searchResults) },
        });
      })
      .catch((error) => {
        setLoading(false);
        if (error.response && error.response.status === 404) {
          console.log('No vinyls found');
        } else {
          console.log('Failed to get Vinyls', error);
        }
      });
  };

  return (
    <div>
      <div className="flex align-middle">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for albums..."
          className="h-fit m-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <Button onClick={handleSearch} text="Search" />
      </div>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default SearchBar;
