import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { playlistState } from "../../atoms/playlistAtom";
import useSpotify from "../../hooks/useSpotify";
import Song from "./Song";

const SongTable = ({ playlistID }) => {
  const [error, setError] = useState(""); // State to hold error messages

  // Get Spotify API instance
  const spotifyAPI = useSpotify();
  // Get and set current playlist using Recoil
  const [currentPlaylist, setCurrentPlaylist] = useRecoilState(playlistState);

  // Fetch playlist when component mounts or playlistID changes
  useEffect(() => {
    if (spotifyAPI.getAccessToken() && playlistID) {
      spotifyAPI
        .getPlaylist(playlistID)
        .then((data) => setCurrentPlaylist(data.body))
        .catch((err) => {
          console.error("Playlist failed to load.", err);
          setError("Failed to load playlist.");
        });
    }
  }, [spotifyAPI, playlistID]);

  // Pagination state and logic
  const itemsPerPage = 10;
  const totalPages = Math.ceil(
    (currentPlaylist?.tracks?.items?.length ?? 0) / itemsPerPage
  );
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Get current paginated playlist tracks
  const getCurrentPlaylist = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return currentPlaylist?.tracks?.items?.slice(startIndex, endIndex) || [];
  };

  return (
    <>
      {error && <p className="text-red-500">{error}</p>}
      {currentPlaylist?.tracks?.items?.length === 0 ? (
        <p>No songs found.</p>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Song Name / Artist</th>
                  <th>Album</th>
                  <th className="text-center">On Vinyl?</th>
                  <th></th>
                  <th className="text-center">Spotify Link</th>
                </tr>
              </thead>
              <tbody>
                {getCurrentPlaylist().map((track) => (
                  <Song key={track.track.id} track={track.track} />
                ))}
              </tbody>
            </table>
          </div>
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`btn ${
                  index + 1 === currentPage ? "btn-active" : ""
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default SongTable;
