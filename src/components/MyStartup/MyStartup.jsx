import { useEffect } from "react";
import { useSelector , useDispatch} from "react-redux";
import Completed from "../../icons/Completed";
import { setData , setRandomText } from "../../redux/slice/myStartup";
import './myStartup.scss';

function MyStartup(){
    const {data , randomText} = useSelector(state => state.myStartup);
    const dispatch = useDispatch();
    const URL = 'https://uselessfacts.jsph.pl/random.json';
    const URL_ERR = 'Sorry , there is a problem with the server, please try again later !';
    
    const checkboxHandler = (e , step_id ,subStep_id) => {     
        const arr = JSON.parse(JSON.stringify(data)).map((i )=> {
            for(let key of i.subSteps){
                if(key.id === subStep_id) key.checked = e.target.checked             
            }
            return i
        })
        const completed = arr[step_id].subSteps.every(i => i.checked === true)

        arr[step_id].completed = completed
        dispatch(setData(arr))      
    }
    useEffect(()=>{
        const allCompleted = data.every(i => i.completed === true)
        if(allCompleted){
            fetch(URL)
                .then(response => response.json())
                .then(res =>  dispatch(setRandomText(res.text)))
                .catch(err => dispatch(setRandomText(URL_ERR)))
        }else{
            dispatch(setRandomText(''))
        }
        localStorage.setItem('Shant-MyStartup' , JSON.stringify(data)) 
    }, [data])

    return (
        <>
            <div className="randomText">{randomText}</div>
            <div className="myStartup-container">
                <div className="header"><h2>My startup progress</h2></div>
                {
                    data.map((i , ind , array) => {
                        return (
                            <div className='data-item' key={ind}>
                                <div className="data-item-name">
                                    <p className="data-item-id">{ind}</p>
                                    <h2>{i.name}</h2>
                                    {
                                        i.completed ? <span className="completed"><Completed /></span>: null
                                    }
                                </div>
                                <div className="subSteps">
                                    {
                                        i.subSteps.map((item , index)=> {
                                            return (
                                                <div className="step" key={index}>
                                                    <input type="checkbox" 
                                                    className="checkbox" 
                                                    checked={item.checked}
                                                    disabled={ind > 0 && array[ind - 1].completed === false ? true : false}
                                                    onChange={e => checkboxHandler(e ,i.id ,item.id)}
                                                    />
                                                    <span>{item.subStep}</span>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default MyStartup