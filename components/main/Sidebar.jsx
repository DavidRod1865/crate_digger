import { HomeIcon, LibraryIcon, HeartIcon } from "@heroicons/react/outline";
import UserInfo from "./UserInfo";
import Link from "next/link";
function Sidebar({ user, playlists }) {

  return (
    <div
      className={`text-gray-500 p-2 text-sm md:text-base border-r border-blue-500 h-full scroll-bar-hide hidden md:block md:min-w-[12rem]`}
    >
      <UserInfo user={user} />

      <hr className="border-b-[0.1px] border-blue-500" />
      <div className="overflow-y-scroll h-screen">
        <Link href="/" className="hover:text-white">
          <div
            tabIndex={0}
            className="collapse hover:bg-green-500 hover:text-black transition-all ease-in-out duration-700 mt-3"
          >
            <input type="checkbox" className="peer" />
            <div className="collapse-title flex gap-2 hover:text-white peer-checked:bg-green-500 peer-checked:text-black">
              <HomeIcon className="h-5 w-5" />
              <p>Home</p>
            </div>
          </div>
        </Link>

        <div
          tabIndex={0}
          className="collapse hover:bg-green-500 hover:text-black transition-all ease-in-out duration-700"
        >
          <input type="checkbox" className="peer" />
          <div className="collapse-title flex gap-2 hover:text-white peer-checked:bg-green-500 peer-checked:text-black">
            <LibraryIcon className="h-5 w-5" />
            <p>Your Playlists</p>
          </div>
          <div className="collapse-content peer-checked:bg-green-500 peer-checked:text-black">
            {playlists.map((playlist) => (
              <div key={playlist.id} className="flex flex-col">
                <Link
                  key={playlist.id}
                  href={`/album/${playlist.id}`}
                  className="cursor-pointer hover:text-white m-2 w-full"
                >
                  {playlist.name}
                </Link>
                <hr className="border-b-[0.1px] border-black w-full" />
              </div>
            ))}
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse hover:bg-green-500 hover:text-black transition-all ease-in-out duration-700"
        >
          <input type="checkbox" className="peer" />
          <div className="collapse-title flex gap-2 hover:text-white peer-checked:bg-green-500 peer-checked:text-black">
            <HeartIcon className="h-5 w-5" />
            <p>Saved Vinyls</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
