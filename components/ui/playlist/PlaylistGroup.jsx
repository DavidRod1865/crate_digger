import PlaylistItem from "./PlaylistItem";

const Playlists = ({ playlists }) => {
  const randomColors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
  ];

  return (
    <div className="carousel carousel-center p-4 m-2 max-w-[1400px] space-x-4 bg-neutral rounded-box relative">
      {playlists.map((playlist) => {
        const color =
          randomColors[Math.floor(Math.random() * randomColors.length)];

        return (
          <PlaylistItem key={playlist.id} playlist={playlist} color={color} />
        );
      })}
    </div>
  );
};

export default Playlists;
