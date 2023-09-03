import Navbar from "../components/navbar";
import "../styles/globals.css";
import { Inter } from '@next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

function MyApp({ Component, pageProps }) {
  return (
    <>
    <main className={inter.className}>
      <Navbar />
      <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
