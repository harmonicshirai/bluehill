import React from 'react';
import { Phone, Mail, ArrowRight, MessageCircle } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <div className="hero-text">
                    <p className="hero-subtitle">神戸駅徒歩1分・渉外相続に強い司法書士事務所</p>
                    <h1 className="hero-title">
                        <span className="block">大切な財産と</span>
                        <span className="block">想いをつなぐ。</span>
                    </h1>
                    <p className="hero-description">
                        相続・遺言・不動産登記から、国際的な相続案件まで。<br />
                        身近で頼れる専門家が、丁寧にお手伝いします。
                    </p>

                    <div className="hero-cta-group">
                        <a href="tel:078-000-0000" className="btn btn-primary hero-btn">
                            <Phone size={20} className="btn-icon" />
                            <span>電話で相談する</span>
                        </a>
                        <a href="#contact" className="btn btn-secondary hero-btn">
                            <Mail size={20} className="btn-icon" />
                            <span>メールで相談する</span>
                        </a>
                        <a href="#line" className="btn btn-line hero-btn">
                            <MessageCircle size={20} className="btn-icon" />
                            <span>LINEで相談する</span>
                        </a>
                    </div>
                    <p className="hero-note">初回30分相談無料（電話・オンライン可）</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
