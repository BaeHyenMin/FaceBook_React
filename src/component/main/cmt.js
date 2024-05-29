import { useEffect } from "react";

function Cmt() {

    useEffect(() => {
        const modal = document.getElementById('my_modal_1');
        if (modal) {
            modal.showModal(); // Correct method to show the dialog
        }
    }, []);

    return (
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
                    <input type="text" placeholder="댓글 작성..." className="input cmt-input" />
                    <form method="dialog">
                        <button className='btn cmt-btn'>작성</button>
                        <button className="btn">닫기</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
}

export default Cmt;
