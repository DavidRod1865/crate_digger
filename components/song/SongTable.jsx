import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { playlistState } from "../../atoms/playlistAtom";
import useSpotify from "../../hooks/useSpotify";
import Recordimg from "../../public/recordImage.png";
import Song from "./Song";

const SongTable = ({ playlistID }) => {
  const defaultImage = Recordimg;
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
                  <th></th>
                  <th>Song Name / Artist</th>
                  <th>Album</th>
                  <th>On Vinyl?</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {getCurrentPlaylist().map((track) => (
                    <Song key={track.track.id} track={track.track} />
                //   <tr key={track.track.id}>
                //     <td>
                //       <label>
                //         <input type="checkbox" className="checkbox" />
                //       </label>
                //     </td>
                //     <td>
                //       <div className="flex items-center gap-3">
                //         <div className="avatar">
                //           <div className="mask mask-squircle w-12 h-12">
                //             <img
                //               src={
                //                 track.track.album.images?.[0]?.url ||
                //                 defaultImage
                //               }
                //               alt="Track Art"
                //             />
                //           </div>
                //         </div>
                //         <div>
                //           <div className="font-bold">{track.track.name}</div>
                //           <div className="text-sm opacity-50">
                //             {track.track.artists[0].name}
                //           </div>
                //         </div>
                //       </div>
                //     </td>
                //     <td>
                //       {track.track.album.name}
                //       <br />
                //       <span className="badge badge-ghost badge-sm">
                //         Release Date: {track.track.album.release_date}
                //       </span>
                //     </td>
                //     <td>{track.track.album.total_tracks}</td>
                //     <td>
                //       <button className="btn btn-ghost btn-xs">details</button>
                //     </td>
                //   </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th></th>
                  <th>Song Name</th>
                  <th>Artist</th>
                  <th>Favorite Color</th>
                  <th></th>
                </tr>
              </tfoot>
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
