import React from "react";
import { getProviders, signIn } from 'next-auth/react';

const Login = ({ providers }) => {
  return (
    <main className="flex flex-col justify-between h-screen md:bg-[url('/lena-kudryavtseva-hdODD2TVIlM-unsplash.jpg')] bg-[url('/lena-kudryavtseva-qRV2TQ7Aul4-unsplash.jpg')] bg-cover">
      <div className="flex flex-auto justify-center items-center">
        <div className="flex flex-col bg-black items-center bg-opacity-90 p-5 rounded-2xl w-96 text-center">
          <img src="web-logo.png" alt="Crate Digger Logo" className="mx-auto h-24 w-auto mb-4 mt-2" />

          <h1 className="text-4xl font-extrabold text-white hover:text-orange-600 transition duration-300 p-2">Crate Digger</h1>
          <h2 className="text-2xl font-semibold text-white break-normal">Discover Vinyl Records</h2>
          <h2 className="text-2xl font-semibold text-white break-normal mb-4">for Your Favorite Playlists</h2>
    
          {/* <img className="w-32 mt-5" src="https://links.papareact.com/9xl" alt="spotify_logo" /> */}
          {Object.values(providers).map((provider) => {
            return (
              <div key={provider.name}>
              <button className="bg-purple-800 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 m-2" onClick={() => signIn(provider.id, {callbackUrl: "/"})}>
                Log In with {provider.name}
              </button>
            </div>
              )
            })}
            <p className="text-gray-400 mt-1 text-xs p-2">**Spotify Premium account required to get started**</p>
        </div>
      </div>
      <footer className="text-center text-xs text-gray-400">Photo by <a href="https://unsplash.com/@lenakuld?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Lena Kudryavtseva</a> on <a href="https://unsplash.com/photos/qRV2TQ7Aul4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </footer>
    </main>
  );
};

export default Login;

export async function getServerSideProps(){
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}