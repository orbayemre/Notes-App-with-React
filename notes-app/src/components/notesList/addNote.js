import {useDispatch} from "react-redux";
import {setDate,setId,setColor,setFont} from "../../stores/newTemp";
import {showNew} from "../../stores/showNewUpd";
import { nanoid } from 'nanoid'

export default function AddNote(){
    const dispatch = useDispatch();
    const showNewComp = () =>{

        dispatch(showNew());
        dispatch(setDate());
        dispatch(setId(nanoid()));
        dispatch(setColor("red"));
        dispatch(setFont("signika"));

    }
    return(
        <div onClick={showNewComp} className="flex justify-center items-center w-40 h-40 ml-10 rounded-full cursor-pointer bg-light shadow-type2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-1/2 w-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
        </div>
    )
}