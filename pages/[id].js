import { useRouter } from 'next/router'
import { useEffect } from 'react';

const axios = require('axios');

const Link = () => {
    
    const router = useRouter()
    useEffect(()=>{
      if(!router.isReady) return;
        const { id } = router.query
        axios.get(`https://unicorn-link.herokuapp.com/api/shorten/?key=${id}`, {
          })
          .then(function (response) {
            console.log(response.data.url)
            window.location = response.data.url
          })
          .catch(function (error) {
          })

  
    }, [router.isReady]);
    return (
        <h1>Link yükleniyor</h1>
    )
}

export default Link