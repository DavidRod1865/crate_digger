import Link from "next/link";

const PlaylistItem = ({ playlist, color }) => {
  return (
          <div
            key={playlist.id}
            className="carousel-item flex flex-col w-60 count-[4] cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <Link href={`/album/${playlist.id}`}>
              <div className="relative group">
                <img
                  src={playlist.images[0].url}
                  alt="album art"
                  className="object-cover rounded-box h-full w-full"
                />
                <div className={`absolute inset-0 ${color} bg-opacity-50 flex items-center justify-center rounded-box opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out`}>
                  <p className="text-white text-xl font-bold">{playlist.name}</p>
                </div>
              </div>
            </Link>
          </div>
  )
}

export default PlaylistItem