import { useContext, useEffect, useState } from "react"
import axios from "axios";
import {AuthContext} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";
import './dashboard.css';

export const Dashboard = () => {

    const [data,setData] = useState([]);

    const {auth, handleLogOut} = useContext(AuthContext);

    const navigate = useNavigate();

    //get all candidates
    useEffect(()=>{
        if(auth){
            try{
                axios.get('/candidates')
                .then((res)=>{
                    console.log(res.data);
                    setData(res.data);
                })
            }catch(err){
                console.error(err)
            }

        }
    })

    const handleClick = ()=>{
        handleLogOut();
        navigate('/login')
    }
  
    return <>
        <button onClick={handleClick}>Logout</button>
        <div className="candidates_container">
            <p >Candidates List : {data.length}</p>

            <table>
                <th></th>
            </table>
        </div>

        
    </>

   

}