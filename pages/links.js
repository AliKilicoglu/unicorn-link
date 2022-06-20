import { useState,useEffect } from "react"
import Link from "../components/Link"
import Navbar from "../components/Navbar"
const Links = () => {
  const [keys,setKeys] = useState([])
  useEffect(() => {
  const cookieKeys = localStorage.getItem("keys").split("-!-")
  const parsedCookieKeys = []
  for(let i = 0;i<cookieKeys.length;i++){
    parsedCookieKeys.push(JSON.parse(cookieKeys[i]))
  }
  setKeys(parsedCookieKeys)
}, [])
  return (
    keys.map(key => {
      return (<div>
        <Link url={key.url} urlKey={key.key}/>
      </div>)
    })
    )
}


export default Links