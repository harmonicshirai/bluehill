import React from 'react';
import { Globe, MapPin, HeartHandshake } from 'lucide-react';
import './Strengths.css';

const Strengths = () => {
    const strengths = [
        {
            icon: Globe,
            title: '渉外相続・国籍案件の豊富な経験',
            description: '国際結婚や海外在住のご家族がいる相続など、複雑な渉外案件も多数の実績があります。英語での対応も可能です。'
        },
        {
            icon: MapPin,
            title: '神戸駅徒歩1分の好立地',
            description: 'JR神戸駅から徒歩1分。雨の日でもアクセスしやすく、お仕事帰りやお買い物ついでにお立ち寄りいただけます。'
        },
        {
            icon: HeartHandshake,
            title: '丁寧なヒアリングと明朗会計',
            description: '専門用語を使わず分かりやすくご説明します。費用についても事前に明確なお見積りを提示し、ご納得いただいてから着手します。'
        }
    ];

    return (
        <section id="strengths" className="section strengths-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">当事務所の強み</h2>
                    <p className="section-subtitle">Why Choose Us</p>
                </div>

                <div className="strengths-grid">
                    {strengths.map((item, index) => (
                        <div className="strength-card" key={index}>
                            <div className="strength-icon-box">
                                <item.icon size={40} strokeWidth={1.5} />
                            </div>
                            <div className="strength-content">
                                <h3 className="strength-title">{item.title}</h3>
                                <p className="strength-desc">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Strengths;
