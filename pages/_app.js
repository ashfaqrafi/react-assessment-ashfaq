import "../styles/globals.css";
import { Inter } from '@next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

function MyApp({ Component, pageProps }) {
  return (
    <>
    <main className={inter.className}>
      <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
