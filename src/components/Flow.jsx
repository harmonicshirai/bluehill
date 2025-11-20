import React from 'react';
import { Phone, MessageSquare, FileText, PenTool, CheckCircle } from 'lucide-react';
import './Flow.css';

const Flow = () => {
    const steps = [
        {
            icon: Phone,
            title: 'お問い合わせ',
            desc: 'お電話またはメールフォームよりお気軽にご連絡ください。初回相談の日程を調整いたします。'
        },
        {
            icon: MessageSquare,
            title: '面談・ヒアリング',
            desc: '事務所またはオンラインにて、詳しいご事情をお伺いします。初回30分は無料です。'
        },
        {
            icon: FileText,
            title: 'ご提案・お見積り',
            desc: '手続きの方針と費用について、分かりやすくご説明します。ご納得いただけるまで契約はいたしません。'
        },
        {
            icon: PenTool,
            title: 'ご契約・着手',
            desc: '委任契約を締結し、速やかに手続きを開始します。進捗は随時ご報告いたします。'
        },
        {
            icon: CheckCircle,
            title: '完了・アフターフォロー',
            desc: '手続き完了後、関係書類をお渡しします。その後のご相談も継続してサポート可能です。'
        }
    ];

    return (
        <section id="flow" className="section flow-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">相談の流れ</h2>
                    <p className="section-subtitle">Flow</p>
                </div>

                <div className="flow-container">
                    {steps.map((step, index) => (
                        <div className="flow-step" key={index}>
                            <div className="flow-number">0{index + 1}</div>
                            <div className="flow-icon-wrapper">
                                <step.icon size={32} />
                            </div>
                            <div className="flow-content">
                                <h3 className="flow-title">{step.title}</h3>
                                <p className="flow-desc">{step.desc}</p>
                            </div>
                            {index < steps.length - 1 && <div className="flow-arrow"></div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Flow;
