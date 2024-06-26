import {useState} from 'react';
import Cmt from '../main/cmt';
import '../../css/MainHome.css'
const MainHome = () => {

    const [showModal, setShowModal] = useState(false);


    const cmtOnclick = (e) =>{
             setShowModal(true);
    }
    return (
        <div>
            <section className='home'>
                <div className='card-container'>
                    <div className='title-container'>
                        <div className='profile'><img src='http://localhost:5123/uploads/facebook_base_profile.png' alt='이미지없음' /></div>
                        <p>여기가 제목 들어갈듯?</p>
                    </div>
                    <div style={{ clear: "both" }}></div>
                    <p className='content'>계단이 있는 줄 몰랐어요계단이 있는 줄 몰랐어요계단이 있는 줄 몰랐어요계단이 있는 줄 몰랐어요계단이 있는 줄 몰랐어요계단이 있는 줄 몰랐어요</p>

                    <div className="carousel w-full carousel-container">
                        <div id="slide1" className="carousel-item slide-container">
                            <img src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="slide-img" />
                            <div className="arrow-container">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle btn-right">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative slide-container">
                            <img src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="slide-img" />
                            <div className="arrow-container">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle btn-right">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative slide-container">
                            <img src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="slide-img" />
                            <div className="arrow-container">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle btn-right">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative slide-container">
                            <img src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="slide-img" />
                            <div className="arrow-container">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle btn-right">❯</a>
                            </div>
                        </div>
                    </div>
                    <div className='card-footer'>
                        <button ><img src='http://localhost:5123/uploads/facebook_favorite_before.png' alt='이미지없음' /> <p>좋아요</p></button>
                        <button onClick={cmtOnclick}><img src='http://localhost:5123/uploads/comment.png' /> <p>댓글</p></button>
                        <button><img src='http://localhost:5123/uploads/siren.png' /> <p>신고</p></button>
                    </div>
                </div>




                <div className='card-container'>
                    <div className='title-container'>
                        <div className='profile'><img src='http://localhost:5123/uploads/facebook_base_profile.png' alt='이미지없음' /></div>
                        <p>여기가 제목 들어갈듯?</p>
                    </div>
                    <div style={{ clear: "both" }}></div>
                    <p className='content'>계단이 있는 줄 몰랐어요계단이 있는 줄 몰랐어요계단이 있는 줄 몰랐어요계단이 있는 줄 몰랐어요계단이 있는 줄 몰랐어요계단이 있는 줄 몰랐어요</p>

                    <div className="carousel w-full carousel-container">
                        <div id="slide1" className="carousel-item slide-container">
                            <img src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="slide-img" />
                            <div className="arrow-container">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle btn-right">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative slide-container">
                            <img src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="slide-img" />
                            <div className="arrow-container">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle btn-right">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative slide-container">
                            <img src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="slide-img" />
                            <div className="arrow-container">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle btn-right">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative slide-container">
                            <img src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="slide-img" />
                            <div className="arrow-container">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle btn-right">❯</a>
                            </div>
                        </div>
                    </div>
                    <div className='card-footer'>
                        <button ><img src='http://localhost:5123/uploads/facebook_favorite_before.png' alt='이미지없음' /> <p>좋아요</p></button>
                        <button onClick={cmtOnclick}><img src='http://localhost:5123/uploads/comment.png' /> <p>댓글</p></button>
                        <button><img src='http://localhost:5123/uploads/siren.png' /> <p>신고</p></button>
                    </div>
                </div>
            </section>
            {showModal && <Cmt />}
          
        </div>
    )
}

export default MainHome;