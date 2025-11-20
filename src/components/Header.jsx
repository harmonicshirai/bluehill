import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MessageCircle } from 'lucide-react';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <div className="logo">
                    <a href="/">
                        <span className="logo-text-en">Blue Hill</span>
                        <span className="logo-text-jp">司法書士事務所</span>
                    </a>
                </div>

                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <ul>
                        <li><a href="#services" onClick={() => setIsMenuOpen(false)}>業務案内</a></li>
                        <li><a href="#strengths" onClick={() => setIsMenuOpen(false)}>当事務所の強み</a></li>
                        <li><a href="#flow" onClick={() => setIsMenuOpen(false)}>相談の流れ</a></li>
                        <li><a href="#fees" onClick={() => setIsMenuOpen(false)}>費用について</a></li>
                        <li><a href="#access" onClick={() => setIsMenuOpen(false)}>アクセス</a></li>
                    </ul>
                    <div className="mobile-cta">
                        <a href="tel:078-000-0000" className="btn btn-primary btn-block">
                            <Phone size={18} style={{ marginRight: '8px' }} />
                            電話で相談
                        </a>
                        <a href="#line" className="btn btn-line btn-block" style={{ marginTop: '10px' }}>
                            <MessageCircle size={18} style={{ marginRight: '8px' }} />
                            LINEで相談
                        </a>
                    </div>
                </nav>

                <div className="header-cta">
                    <a href="tel:078-000-0000" className="btn-icon-text">
                        <Phone size={20} />
                        <div className="cta-text">
                            <span className="cta-label">お電話でのご相談</span>
                            <span className="cta-number">078-000-0000</span>
                        </div>
                    </a>
                    <a href="#contact" className="btn btn-primary desktop-only">
                        <Mail size={18} style={{ marginRight: '8px' }} />
                        メール相談
                    </a>
                    <a href="#line" className="btn btn-line desktop-only" style={{ marginLeft: '10px' }}>
                        <MessageCircle size={18} style={{ marginRight: '8px' }} />
                        LINE相談
                    </a>

                    <a href="tel:078-000-0000" className="btn-icon-only mobile-only">
                        <Phone size={20} />
                    </a>

                    <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
