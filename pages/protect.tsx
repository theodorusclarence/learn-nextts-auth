import Button from '@/components/Button';
import CustomLink from '@/components/CustomLink';
import { useAuthDispatch, useAuthState } from '@/context/AuthContext';

export default function ProtectPage() {
  const { authenticated, user } = useAuthState();
  const dispatch = useAuthDispatch();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('token');
  };

  return (
    <section className='bg-dark'>
      <article className='min-h-screen py-20 text-white layout'>
        <h1 className='text-yellow-400'>
          Congratulations, you went to the protected page
        </h1>
        <p className='mt-4'>Welcome {user.name}</p>
        <p className='mt-2'>
          You are {authenticated ? 'logged in' : 'not logged in'}
        </p>
        <Button className='block mt-8' onClick={handleLogout}>
          Logout
        </Button>
        <CustomLink className='mt-2' href='/'>
          Back to home
        </CustomLink>
      </article>
    </section>
  );
}
