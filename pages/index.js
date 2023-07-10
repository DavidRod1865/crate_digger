import { useSession, getProviders, getSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Sidebar from '@/components/Sidebar';
import Center from '@/components/Center';

export default function Home() {
  const [session, loading] = useSession(); // Removed ": session" from the declaration

  const router = useRouter();

  useEffect(() => {
    if (!loading && !session) {
      router.push('/login'); // Redirect to "/login" if no session
    }
  }, [loading, session, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='bg-black h-screen overflow-hidden'>
      <main className='flex'>
        <Sidebar />
        <Center />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  const session = await getSession(context);

  return {
    props: {
      providers,
      session,
    },
  };
}
