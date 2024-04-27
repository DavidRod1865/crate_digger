import { signOut } from "next-auth/react";

const UserInfo = ({ user }) => {
  const { images, display_name, external_urls, followers } = user || {};
  const profileImage = images?.[1]?.url || images?.[0]?.url || "";
  const spotifyProfile = external_urls?.spotify;
  const followerCount = followers?.total || 0;

  return (
    <div className="container mx-auto p-4 flex flex-col items-center space-y-4">
      <img
        className="h-36 w-36 rounded-full shadow-xl"
        src={profileImage}
        alt="User Profile"
      />

      <div className="flex flex-col items-center space-y-2">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-500">
          {display_name}
        </h1>
        <a href={spotifyProfile}>View Spotify Profile</a>
        <p>Followers: {followerCount}</p>
      </div>

      <button
        className="btn btn-error mt-4"
        onClick={() => signOut({ callbackUrl: "/login" })}
      >
        Log Out
      </button>
    </div>
  );
};

export default UserInfo;
