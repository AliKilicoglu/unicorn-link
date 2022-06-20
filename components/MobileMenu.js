import Link from 'next/link'
const MobileMenu = () => {
  return (
    <div className="fixed justify-items-stretch bg-blue-600 z-10 w-screen p-5">
      <Link href="/">
        <a  className="decoration-solid text-white block text-xl">Yeni</a>
      </Link>
      <Link href="/links">
        <a  className="decoration-solid text-white block text-xl mt-2">Linklerim</a>
      </Link>
    </div>
  )
}

export default MobileMenu