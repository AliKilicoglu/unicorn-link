import { useState,useEffect } from "react"
import Link from "../components/Link"
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
    keys.map(urlKey => {
      return (
        <Link url={urlKey.url} urlKey={urlKey.key}/>
      )
    })
    )
}


export default Links