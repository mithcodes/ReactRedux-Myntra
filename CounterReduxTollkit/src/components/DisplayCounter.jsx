import { useSelector } from "react-redux"

const DisplayCounter=()=>{
   const {counterVal}=useSelector(storee=>storee.counter)
   return(
<p className="lead mb-4">counter current valu:{counterVal}.</p>
    )
}

export default DisplayCounter