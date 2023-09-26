import { useRouter } from 'next/router';
import SearchResults from '../../components/ui/search/SearchResults';

const SearchPage = () => {
  const router = useRouter();
  const { results } = router.query;

  if (!results) {
    return <div>Loading...</div>; // Handle loading state or error
  }

  const parsedResults = JSON.parse(results);

  return (
    <SearchResults results={parsedResults} />
  );
};

export default SearchPage;