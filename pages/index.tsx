import Seo from '@/components/Seo';
import CustomLink from '@/components/CustomLink';
import Button from '@/components/Button';
import { useAuthDispatch, useAuthState } from '@/context/AuthContext';

export default function Home() {
  const { authenticated, loading } = useAuthState();
  const dispatch = useAuthDispatch();
  const handleLogin = () => {
    dispatch({
      type: 'LOGIN',
      payload: {
        email: 'bambang@gmail.com',
        name: 'bambang',
      },
    });
    localStorage.setItem('token', 'nice');
  };
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('token');
  };

  return (
    <>
      <Seo templateTitle='Home' />

      <main>
        <section className='bg-dark'>
          <div className='flex flex-col items-center justify-center min-h-screen text-white layout'>
            <h1 className='text-center'>
              <CustomLink href='https://github.com/theodorusclarence/learn-nextts-auth'>
                Auth Context TS Example
              </CustomLink>
            </h1>
            <CustomLink className='mt-4' href='/protect'>
              Go to /protect
            </CustomLink>

            <div className='mt-8'>
              {loading ? (
                <div className='p-1 bg-gray-500 animate-pulse'>loading...</div>
              ) : authenticated ? (
                <Button onClick={handleLogout}>Logout</Button>
              ) : (
                <Button variant='secondary' onClick={handleLogin}>
                  Login
                </Button>
              )}
            </div>
            <p className='mt-2'>
              Auth Status:{' '}
              {loading
                ? 'loading..'
                : authenticated
                ? 'logged in'
                : 'not logged in'}
            </p>
            <footer className='absolute text-gray-500 bottom-2'>
              © {new Date().getFullYear()} By{' '}
              <CustomLink href='https://theodorusclarence.com?ref=tsnextstarter'>
                Theodorus Clarence
              </CustomLink>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}
