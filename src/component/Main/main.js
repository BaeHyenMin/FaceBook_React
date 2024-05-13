import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Main = () => {

    let [usr, setUsrInfo] = useState([]);

    useEffect(() => {
        axios.get('/usrView')
            .then((r) => {
                console.log(r)
                setUsrInfo(u =>([...u,...r.data]))})
    },[])

    return(
        <div>
            {usr.map((u,i) => (
                <div key={i}>
                    <div>{u.name}</div>
                </div>
            ))}
        </div>
    )
}

export default Main