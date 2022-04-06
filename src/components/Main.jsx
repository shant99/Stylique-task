import { useEffect } from "react"
import { useDispatch} from "react-redux"
import { setData } from "../redux/slice/myStartup"
import MyStartup from "./MyStartup/MyStartup"

function Main() {
    const dispatch = useDispatch()
    const loc = JSON.parse(localStorage.getItem('Shant-MyStartup'))

    useEffect(()=>{   
      if(loc !== null){
        dispatch(setData(loc))
      } 
    },[])
    return (
        <div><MyStartup /></div>
    )
}
export default Main