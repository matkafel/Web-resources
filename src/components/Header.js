import React from 'react';
import Navigation from './Navigation'
import '../components/style/Header.css'

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="myPhoto">
                    <div className="photo"></div>
                    <p>Mateusz Kafel</p>
                </div>
                <h1>Web Developer Resources</h1>

                <Navigation />
            </div>

        </>
    )
}

export default Header;