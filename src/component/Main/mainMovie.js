function mainMovie() {
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
                    <video controls loop className='video-container'>
                        <source src="http://localhost:5123/uploads/testvideo.mp4" type="video/mp4" />
                    </video>
                    <div className='card-footer'>
                        <button ><img src='http://localhost:5123/uploads/facebook_favorite_before.png' alt='이미지없음' /> <p>좋아요</p></button>
                        <button onClick={() => document.getElementById('my_modal_1').showModal()}><img src='http://localhost:5123/uploads/comment.png' /> <p>댓글</p></button>
                        <button><img src='http://localhost:5123/uploads/siren.png' /> <p>신고</p></button>
                    </div>
                </div>

            </section>

            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <div className='cmt-container'>
                        <div className='cmt-profile'><img src='http://localhost:5123/uploads/facebook_base_profile.png' alt='이미지없음' /></div>
                        <p>댓글 길게 한번 해보자! 댓글 길게 한번 해보자! 댓글 길게 한번 해보자! 댓글 길게 한번 해보자!</p>
                    </div>
                    <div className='cmt-container'>
                        <div className='cmt-profile'><img src='http://localhost:5123/uploads/facebook_base_profile.png' alt='이미지없음' /></div>
                        <p>댓글</p>
                    </div>
                    <div className='cmt-container'>
                        <div className='cmt-profile'><img src='http://localhost:5123/uploads/facebook_base_profile.png' alt='이미지없음' /></div>
                        <p>댓글</p>
                    </div>
                    <div className='cmt-container'>
                        <div className='cmt-profile'><img src='http://localhost:5123/uploads/facebook_base_profile.png' alt='이미지없음' /></div>
                        <p>댓글</p>
                    </div>
                    <div className='cmt-container'>
                        <div className='cmt-profile'><img src='http://localhost:5123/uploads/facebook_base_profile.png' alt='이미지없음' /></div>
                        <p>댓글</p>
                    </div>
                    <div className="modal-action">
                        <input type="text" placeholder="댓글 작성..." className="input input-bordered cmt-input" />
                        <form method="dialog">
                            <button className='btn cmt-btn'>작성</button>
                            <button className="btn">닫기</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
}

export default mainMovie;