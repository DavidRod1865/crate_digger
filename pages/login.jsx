import React from "react";
import { getProviders, signIn } from 'next-auth/react';
import AuthForm from "../components/auth-form";

const Login = ({ providers }) => {
  return (
    <main>
      <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
        <img className="w-32 mb-5 mt-5" src="https://links.papareact.com/9xl" alt="spotify_logo" />
        {Object.values(providers).map((provider) => {
          return (
            <div key={provider.name}>
              <button className="bg-[#18D860] rounded-full p-5" onClick={() => signIn(provider.id, {callbackUrl: "/"})}>
                Log In with {provider.name}
              </button>
            </div>
              )
          })}
        <AuthForm />
      </div>
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