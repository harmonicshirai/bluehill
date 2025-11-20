import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <span className="footer-logo-en">Blue Hill</span>
                        <span className="footer-logo-jp">司法書士事務所</span>
                    </div>
                    <ul className="footer-links">
                        <li><a href="#services">業務案内</a></li>
                        <li><a href="#strengths">当事務所の強み</a></li>
                        <li><a href="#flow">相談の流れ</a></li>
                        <li><a href="#fees">費用について</a></li>
                        <li><a href="#access">アクセス</a></li>
                    </ul>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Blue Hill Judicial Scrivener Office. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
