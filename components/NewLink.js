const axios = require('axios')
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useCopyToClipboard } from 'react-use'
import Cookies from 'js-cookie'
const NewLink = () => {
  const [longUrl,setLongUrl] = useState('')
  const [state, copyToClipboard] = useCopyToClipboard()
  return (
    <>
        <div className="flex flex-col  justify-center text-center  mt-20">
            <h1 className="text-white text-2xl mr-auto ml-auto whitespace-nowrap mb-3 font-medium " >Kısaltacağın linki gir</h1>
            <input  value={longUrl} onChange={e => setLongUrl(e.target.value)} className="ml-24 mr-24 drop-shadow-[20px_20px_20px_rgba(0,0,0,0.3)] w-25 mb-3 text-xl font-medium h-12 rounded-md outline-none text-center" type="text" placeholder="https://..." />
        </div>
        <div className="flex   justify-center">    
            <button onClick={()=>{
              try {
                new URL(longUrl);
                axios.post('https://unicorn-link.herokuapp.com/api/shorten', {
                  url:longUrl,
                })
                .then(function (response) {
                  console.log(response);
                  copyToClipboard('https://unicorn-link.herokuapp.com/'+response.data.key)
                  const keys = localStorage.getItem("keys")
                  if (keys === null) {
                    localStorage.setItem('keys',JSON.stringify({
                      'url':response.data.url,
                      'key':response.data.key
                    }))
                  }
                  else {
                    const keys = localStorage.getItem("keys")
                    localStorage.setItem("keys",keys+'-!-'+JSON.stringify({
                      'url':response.data.url,
                      'key':response.data.key
                  }))
                  }
                  toast.success('Linkiniz panoya kopyalandı')
                })
                .catch(function (error) {
                  console.log(error);
                  toast.error("Bir hata oluştu")
                });
              } catch (e) {
                console.error(e);
                toast.error("URL girdiğinden emin ol")  
              }
              
         
            }} className="hover:bg-blue-500 drop-shadow-[20px_20px_20px_rgba(0,0,0,0.3)] mr-auto ml-auto bg-blue-400 text-white rounded-md h-12  w-24 font-medium  text-2xl ">Kısalt</button>
        </div>
    </>
  
  )
}

export default NewLink