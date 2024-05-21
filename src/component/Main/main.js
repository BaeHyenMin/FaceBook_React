import '../../css/Main.css';
import '../../css/Home.css'
const Main = () => {


    return (
        <div className='flex flex-row main'>
            <div className='basis-1/4 headerLeft'>
                <img src='http://localhost:5123/uploads/facebook_logo.png' alt='이미지없음' />
                <span className='search-bar'>
                    <img src='http://localhost:5123/uploads/search.png' />
                    <input type='text' placeholder='Facebook검색' />
                </span>
            </div>
            <ul className='basis-1/2 headerCenter'>
                <li><img src='http://localhost:5123/uploads/facebook_home_before.png' alt='이미지없음' /></li>
                <li><img src='http://localhost:5123/uploads/facebook_friend_before.png' alt='이미지없음' /></li>
                <li><img src='http://localhost:5123/uploads/facebook_page_before.png' alt='이미지없음' /></li>
                <li><img src='http://localhost:5123/uploads/facebook_video_before.png' alt='이미지없음' /></li>
            </ul>
            <ul className='basis-1/4 headerRight'>
                <li><img src='http://localhost:5123/uploads/facebook_message.png' alt='이미지없음' /></li>
                <li><img src='http://localhost:5123/uploads/facebook_base_profile.png' alt='이미지없음' /></li>
            </ul>
            <div style={{ clear: "both" }}></div>
            <section className='home'>
                <div className='card-container'>
                    <p className='content'>계단이 있는 줄 몰랐어요</p>
                    <video controls loop className='video-container'>
                        <source src="http://localhost:5123/uploads/testvideo.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className='card-container'>
                    <p className='content'>계단이 있는 줄 몰랐어요</p>
                    <video muted autoPlay loop className='video-container'>
                        <source src="http://localhost:5123/uploads/testvideo.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className='card-container'>
                    <p className='content'>계단이 있는 줄 몰랐어요</p>
                    <video muted autoPlay loop className='video-container'>
                        <source src="http://localhost:5123/uploads/testvideo.mp4" type="video/mp4" />
                    </video>
                </div>
                
            </section>
        </div>
    )
}

export default Main