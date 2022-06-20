import '../styles/globals.css'
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
  <div className = " 	bg-[url('../public/background.svg')] bg-cover bg-center h-screen w-screen">
    <Component {...pageProps} />
  </div>
  )
}

export default MyApp