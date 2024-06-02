import React from 'react';
import '../../css/PostCard.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PostCard = ({ type, media, content, user }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="post-card">
            <div className="post-header">
                <img src={user.profilePicture} alt="Profile" className="profile-picture" />
                <div className="user-info">
                    <h3>{user.username}</h3>
                    <span>{user.timeAgo}</span>
                </div>
            </div>
            <div className="post-media">
                {type === 'video' ? (
                    <video controls className='video-container'>
                        <source src={media} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <div className='img-container'>
                        <Slider {...settings}>
                            {media.map((photo, index) => (
                                <div key={index}>
                                    <img src={photo} alt={`Slide ${index}`} className='img-container' />
                                </div>
                            ))}
                        </Slider>
                    </div>
                )}
            </div>
            <p className="post-content">{content}</p>
            <div className="post-footer">
                <button>Like</button>
                <button>Comment</button>
                <button>Share</button>
            </div>
        </div>

    );
};

export default PostCard;
