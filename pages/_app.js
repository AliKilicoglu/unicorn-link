import '../styles/globals.css'
import '../styles/tailwind.css'
import Navbar from '../components/Navbar'
function MyApp({ Component, pageProps }) {
  return (
  <div className = " 	bg-[url('../public/background.svg')] bg-cover bg-center h-screen w-screen">
    <Navbar/>
		<Component {...pageProps} />
  </div>
  )
}

export default MyApp
