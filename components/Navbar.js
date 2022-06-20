import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react'
import MobileMenu from './MobileMenu'
const Navbar = () => {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <>
        <div className="mobile:hidden desktop:show ">
            <div className="drop-shadow-xl flex bg-blue-600 h-16 w-screen font-medium items-center p-4 ">
                <div className="flex-grow ">
                    <h1 className="text-white  text-2xl">Unicorn Link</h1>
                </div> 
                <div className="flex   text-white text-xl  align-middle">
                    <a href="">Yeni</a>
                </div>
                <div className="flex   text-white text-xl ml-3  align-middle">
                    <a href="">Linklerim</a>
                </div>
            </div>
        </div>
            <div className="mobile:show desktop:hidden ">
            <div className="drop-shadow-xl flex bg-blue-600 h-16 w-screen font-medium items-center p-4 ">
                <div className="flex-grow ">
                    <h1 className="text-white  text-2xl">Unicorn Link</h1>
                </div> 
                <div>
                {!menuOpen ?<GiHamburgerMenu onClick={()=>{setMenuOpen(!menuOpen)}}className="text-white h-8 w-8"/>:<AiOutlineClose onClick={()=>{setmenuOpen(!menuOpen)}}className="text-white h-8 w-8"/>}
                </div>
            </div>
        </div>
        {menuOpen ?
                    <MobileMenu/>
                    :
                    <br/>
            }
    </>
        
  )
}

export default Navbar