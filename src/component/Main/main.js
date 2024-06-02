import '../../css/Main.css';
import '../../css/Home.css'
// import MainMovie from './mainMovie'
// import MainHome from './mainHome'
import PostCard from './PostCard';
import React, { useState } from 'react';
const Main = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };


    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    const videoPost = {
        type: 'video',
        media: 'http://localhost:5123/uploads/testvideo.mp4',
        content: 'This is a video post.',
        user: {
            profilePicture: 'http://localhost:5123/uploads/facebook_base_profile.png',
            username: 'John Doe',
            timeAgo: '2 hours ago'
        }
    };

    const photoPost = {
        type: 'photo',
        media: ['https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg', 'https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg', 'https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg'],
        content: 'This is a photo post.',
        user: {
            profilePicture: 'http://localhost:5123/uploads/facebook_base_profile.png',
            username: 'Jane Smith',
            timeAgo: '3 hours ago'
        }
    };

    return (

        <div className='flex flex-row main'>
            <header>
                <div className="logo">SNS</div>
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                </div>
            </header>
            <aside className="sidebar">
                {isLoggedIn ? (
                    <>
                        <button onClick={handleLogout} className="auth-button">Logout</button>
                        <button className="write-button">Write Post</button>
                    </>
                ) : (
                    <button onClick={handleLogin} className="auth-button">Login</button>
                )}
            </aside>
            <section className="content">
                <PostCard {...videoPost} />
                <PostCard {...photoPost} />
            </section>
            {/* <MainMovie></MainMovie>
            <MainHome></MainHome>


            <dialog id="login-modal" className="modal">
                <div className="modal-box" style={{ textAlign: 'center' }}>
                    <span><input type="text" placeholder="아이디" className="input input-bordered login-modal-input" /></span> <br></br>
                    <span><input type="text" placeholder="비밀번호" className="input input-bordered login-modal-input" /></span>
                    <div className="modal-action" >
                        <button className="btn" style={{ margin: '0 auto' }}>로그인</button>
                    </div>
                </div>
            </dialog>


            <dialog id="sign-modal" className="modal" >
                <div className="modal-box" style={{ maxWidth : '50%' }}>
                    <div className="white-box">
                        <div className="w100">
                            <p>Email</p>
                            <input type="email" className="w100-input" placeholder="Email적으셈" />
                        </div>
                        <div className="w50">
                            <p>FirstName</p>
                            <input type="text" className="w100-input" />
                        </div>
                        <div className="w50">
                            <p>LastName</p>
                            <input type="text" className="w100-input" />
                        </div>
                        <div style={{ clear: "both" }}></div>
                        <div className="w100">
                            <p>BirthDay</p>
                            <input type="date" className="w100-input" />
                        </div>
                        <div className="w100">
                            <p>phone</p>
                            <input type="number" className="w100-input" placeholder="- 빼고 적으셈" />
                        </div>
                        <div className="w100">
                            <button className="sub-btn">버튼임</button>
                        </div>
                    </div>
                </div>
            </dialog> */}
        </div>
    )
}




export default Main