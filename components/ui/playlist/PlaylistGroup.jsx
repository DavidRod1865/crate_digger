import { useState } from 'react';
import SongTable from "../../song/SongTable";
import PlaylistItem from "./PlaylistItem";

const Playlists = ({ playlists }) => {
  const [activePlaylistID, setActivePlaylistID] = useState(null);
  const randomColors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
  ];

  const handleClick = (playlistId) => {
    setActivePlaylistID(playlistId);
  };

  return (
    <>
      <div className="carousel carousel-center p-4 mx-2 max-w-[1400px] space-x-4 relative">
        {playlists.map((playlist) => {
          const color = randomColors[Math.floor(Math.random() * randomColors.length)];
          return (
            <PlaylistItem
              key={playlist.id}
              playlist={playlist}
              color={color}
              isActive={playlist.id === activePlaylistID}
              onClick={() => handleClick(playlist.id)}
            />
          );
        })}
      </div>
      <SongTable playlistID={activePlaylistID} isActive={activePlaylistID} />
    </>
  );
};

export default Playlists;
