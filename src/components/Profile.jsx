import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Profile.css';

const Profile = () => {
    return (
        <section id="profile" className="section profile-section">
            <div className="container">
                <div className="profile-wrapper">
                    <div className="profile-image-col">
                        <div className="profile-image-placeholder">
                            {/* Replace with actual image */}
                            <img
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
                                alt="代表司法書士"
                                className="profile-img"
                            />
                        </div>
                    </div>
                    <div className="profile-content-col">
                        <h2 className="section-title text-left">代表司法書士</h2>
                        <h3 className="profile-name">
                            <span className="name-jp">山田 太郎</span>
                            <span className="name-en">Taro Yamada</span>
                        </h3>
                        <p className="profile-message">
                            「家族のこと・大切な財産のことだからこそ、安心してご相談いただける存在でありたいと思っています。」
                        </p>
                        <p className="profile-desc">
                            神戸市出身。大学卒業後、民間企業勤務を経て司法書士登録。
                            渉外相続案件や複雑な不動産登記を得意としています。
                            お客様一人ひとりのご事情に寄り添い、最適な解決策をご提案いたします。
                        </p>
                        <a href="#profile-detail" className="btn btn-secondary profile-btn">
                            詳しいプロフィールを見る <ArrowRight size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
