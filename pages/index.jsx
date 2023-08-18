import { useSession, getProviders, getSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Sidebar from '../components/Sidebar';
import Center from '../components/Center';

export default function Home() {
  const { data: session, status } = useSession(); // Destructure session and status from useSession()

  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') {
      // Handle loading state if needed
      return;
    }
    
    if (!session) {
      router.push('/login'); // Redirect to "/login" if no session
    }
  }, [session, status, router]);

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
