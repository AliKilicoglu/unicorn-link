import { useState,useEffect } from "react"
import Link from "../components/Link"
import { Toaster,toast } from 'react-hot-toast'
const Links = () => {
  const [keys,setKeys] = useState([])
  useEffect(() => {
    if( localStorage.getItem("keys") === null){
      toast.error('şuan sana gösterebileceğim bir şey yok :/')
    }
    else {
  const cookieKeys = localStorage.getItem("keys").split("-!-")
  const parsedCookieKeys = []
  for(let i = 0;i<cookieKeys.length;i++){
    parsedCookieKeys.push(JSON.parse(cookieKeys[i]))
  }
  setKeys(parsedCookieKeys)
}
}, [])
  keys.map(urlKey => {
    return (
      <Link key={urlKey.id} url={urlKey.url} urlKey={urlKey.key}/>
    )
  })
  return (
    <Toaster/>

    )
}


export default Links