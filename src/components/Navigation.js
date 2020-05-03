import React from 'react';
import './style/Navigation.css'

const Navigation = () => {
    return (
        <div className="navi">
            <a href="#html"><i className="fab fa-html5"></i>HTML</a>
            <a href="#css"><i className="fab fa-css3-alt"></i>CSS</a>
            <a href="#js"><i className="fab fa-js"></i>JS</a>
            <a href="#react"><i className="fab fa-react"></i>REACT</a>
            <a href="#colors"><i className="fas fa-palette"></i>COLORS</a>
            <a href="#image"><i className="fas fa-image"></i>IMAGE</a>
            <a href="#optimization"><i className="fas fa-compress"></i>OPTIMIZATION</a>
            <a href="#inspiration"><i className="far fa-lightbulb"></i>INSPIRATION</a>
            <a href="#blogs"><i className="far fa-comments"></i>BLOGS</a>
        </div>
    )
}

export default Navigation;