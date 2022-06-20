import Head from 'next/head'
import Navbar from '../components/Navbar'
import NewLink from '../components/NewLink'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Unicorn Link</title>
        <meta name="description" content="Best link shortener ever" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <NewLink/>
    </div>
  )
}
