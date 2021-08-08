import '@fontsource/inter/variable.css';
import '@/styles/globals.css';
import { AuthProvider } from '@/context/AuthContext';
import PrivateRoute from '@/components/PrivateRoute';

function MyApp({ Component, pageProps }) {
  const protectedRoutes = ['/protect'];

  return (
    <>
      <AuthProvider>
        <PrivateRoute protectedRoutes={protectedRoutes}>
          <Component {...pageProps} />
        </PrivateRoute>
      </AuthProvider>
    </>
  );
}

export default MyApp;
