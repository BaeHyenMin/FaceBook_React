import React from 'react';
import { Link } from 'react-router-dom';
import homeImg from '../icon/home.png'
const Main = () => {
    return(
        <header className="">
            <div className="form-control">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
            </div>
            <ul>
            <Link to="/product/1"><li><img src={homeImg} alt='dddd'/></li></Link>
            <Link to="/product/1"><li><img src='../icon/home.png' alt='dddd'/></li></Link>
            <Link to="/product/1"><li><img src='http://localhost:5123/uploads/icon.png' alt='dddd'/></li></Link>
            <Link to="/product/1"><li><img src='../icon/icon.png' alt='dddd'/></li></Link>
            </ul>
        </header>
    )
}

export default Main