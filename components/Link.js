import {MdDeleteOutline , MdOpenInNew} from 'react-icons/md'
const Link = (props) => {
  var url = props.url 
  console.log(url.length)
  if (url.length > 116) {
    url = url.substring(0,116) + '...'
  }
  
  return (
    <div className="flex p-5 h-5  rounded-md bg-white mb-3 ml-3 mr-3   items-center">
        <div className="flex-grow">
            <div className="w-16">
              <h1 className="truncate">{url}</h1>
            </div>
        </div>
        <MdOpenInNew className="h-8 w-8 text-blue-600 cursor-pointer" onClick={()=>{
            window.location ='https://unicorn-link.herokuapp.com/'+props.urlKey
        }}/>
        <MdDeleteOutline className="h-8 w-8 text-red-600 cursor-pointer"/>
    </div>
  )
}

export default Link