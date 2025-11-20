import React from 'react';
import { Phone, MapPin, Clock, MessageCircle, Mail } from 'lucide-react';
import './Access.css';

const Access = () => {
    return (
        <section id="access" className="section access-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">アクセス</h2>
                    <p className="section-subtitle">Access</p>
                </div>

                <div className="access-wrapper">
                    <div className="access-info">
                        <h3 className="access-name">ブルーヒル司法書士事務所</h3>
                        <div className="access-item">
                            <MapPin className="access-icon" size={20} />
                            <div>
                                <p>〒650-0025</p>
                                <p>兵庫県神戸市中央区相生町○-○-○ ○○ビル○階</p>
                                <p className="access-note">JR神戸駅より徒歩1分 / 湊川神社から徒歩3分</p>
                            </div>
                        </div>
                        <div className="access-item">
                            <Phone className="access-icon" size={20} />
                            <div>
                                <p className="access-phone">078-000-0000</p>
                                <p className="access-note">お気軽にお電話ください</p>
                            </div>
                        </div>
                        <div className="access-item">
                            <Clock className="access-icon" size={20} />
                            <div>
                                <p>平日 9:00〜18:00</p>
                                <p className="access-note">※事前予約で土日祝・夜間も対応可能</p>
                            </div>
                        </div>

                        <div className="access-cta">
                            <a href="tel:078-000-0000" className="btn btn-primary btn-block">
                                <Phone size={20} style={{ marginRight: '8px' }} />
                                電話で相談する
                            </a>
                            <a href="#contact" className="btn btn-secondary btn-block">
                                <Mail size={20} style={{ marginRight: '8px' }} />
                                メールで相談する
                            </a>
                            <a href="#line" className="btn btn-line btn-block">
                                <MessageCircle size={20} style={{ marginRight: '8px' }} />
                                LINEで相談する
                            </a>
                        </div>
                    </div>

                    <div className="access-map">
                        {/* Google Maps Placeholder */}
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.106828107464!2d135.1758649762988!3d34.68499998315866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60008ee467222223%3A0x7c00000000000000!2z56We5oi46aeF!5e0!3m2!1sja!2sjp!4v1700000000000!5m2!1sja!2sjp"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Access;
