import {useState} from 'react'
import axios from 'axios'

function SignIn (){
    let [usr, setUsrInfo] = useState({
        usrId : '',
        pwd : '',
        name : '',
        phNum : '' 
    });

    function setUsr(e){
        setUsrInfo({...usr,[e.target.name] : e.target.value})
    }


    function usrSave(){
        axios.post('/signIn',usr)
            .then((res) =>{console.log('성공' + res.data)})
            .catch((e) => {console.log(e)})
    }


    
    return(
        <div>
            사용자 아이디<input type='text' name="usrId" onChange={setUsr}/>
            비밀번호<input type='text' name="pwd" onChange={setUsr}/>
            닉네임<input type='text' name="name" onChange={setUsr}/>
            전화번호<input type='tel' name="phNum" onChange={setUsr}/>
            <button onClick={usrSave}>회원가입</button>
        </div>
    );    
}

export default SignIn;