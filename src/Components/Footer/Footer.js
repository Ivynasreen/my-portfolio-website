import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer text-center">
            <p>Ivy Nasreen | Copyright {(new Date()).getFullYear()} | All Rights Reserved</p>
        </div>
    );
};

export default Footer;