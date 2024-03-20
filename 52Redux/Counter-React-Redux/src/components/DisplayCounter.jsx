import { useSelector } from "react-redux"

const DisplayCounter=()=>{
   const counter=useSelector(storee=>storee.counter)
   return(
<p className="lead mb-4">counter current valu:{counter}.</p>
    )
}

export default DisplayCounter