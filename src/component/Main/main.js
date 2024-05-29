import '../../css/Main.css';
import '../../css/Home.css'
import MainMovie from './mainMovie'
import MainHome from './mainHome'
const Main = () => {


    return (

        <div className='flex flex-row main'>
            <div className='basis-1/4 headerLeft'>
                <img src='http://localhost:5123/uploads/facebook_logo.png' alt='이미지없음' />
                <span className='search-bar'>
                    <img src='http://localhost:5123/uploads/search.png' />
                    <input type='text' placeholder='검색...' />
                </span>
            </div>
            <ul className='basis-1/2 headerCenter'>
                <li><img src='http://localhost:5123/uploads/facebook_home_before.png' alt='이미지없음' /></li>
                <li><img src='http://localhost:5123/uploads/facebook_video_before.png' alt='이미지없음' /></li>
            </ul>
            <ul className='basis-1/4 headerRight'>
                <li>
                    <div className="dropdown" style={{ display: 'block', marginRight: '20px' }}>
                        <div tabIndex={0} role="button"><img className='usr-img' src='http://localhost:5123/uploads/facebook_base_profile.png' alt='이미지없음' /></div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-70" style={{ right: '5px', width: '90px', backgroundColor: 'white', borderRadius: '5px' }}>
                            <li><button onClick={()=>document.getElementById('login-modal').showModal()}>로그인</button></li>
                            <li><button onClick={()=>document.getElementById('sign-modal').showModal()}>회원가입</button></li>
                        </ul>
                    </div>
                </li>
            </ul>
            <div style={{ clear: "both" }}></div>
            <MainMovie></MainMovie>
            <MainHome></MainHome>


            <dialog id="login-modal" className="modal">
                <div className="modal-box" style={{textAlign : 'center'}}>
                    <span><input type="text" placeholder="아이디" className="input input-bordered login-modal-input" /></span> <br></br>
                    <span><input type="text" placeholder="비밀번호" className="input input-bordered login-modal-input" /></span>
                    <div className="modal-action" >
                            <button className="btn" style={{margin : '0 auto'}}>로그인</button>
                    </div>
                </div>
            </dialog>


            <dialog id="sign-modal" className="modal">
                <div className="modal-box" style={{textAlign : 'center'}}>
                    <span><input type="text" placeholder="아이디" className="input input-bordered login-modal-input" /></span> <br></br>
                    <span><input type="text" placeholder="비밀번호" className="input input-bordered login-modal-input" style={{width : '380px'}} /></span><button className='btn'>전송</button>
                    <span><input type="text" placeholder="핸드폰 번호" className="input input-bordered login-modal-input" /> <button>전송</button></span>
                    <span><input type="text" placeholder="인증번호" className="input input-bordered login-modal-input" /></span>
                    <div className="modal-action" >
                            <button className="btn" style={{margin : '0 auto'}}>회원가입</button>
                    </div>
                </div>
            </dialog>
        </div>
    )
}




export default Main