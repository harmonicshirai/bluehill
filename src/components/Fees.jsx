import React from 'react';
import { Check } from 'lucide-react';
import './Fees.css';

const Fees = () => {
    const feeItems = [
        { title: '相続登記', price: '60,000円〜', note: '不動産の個数・評価額により変動' },
        { title: '遺言書作成サポート', price: '70,000円〜', note: '公正証書遺言の証人立会い含む' },
        { title: '会社設立登記', price: '80,000円〜', note: '定款認証・設立登記申請代理' },
        { title: '役員変更登記', price: '30,000円〜', note: '議事録作成サポート含む' },
        { title: '抵当権抹消登記', price: '15,000円〜', note: '不動産1個につき1,000円加算' },
    ];

    return (
        <section id="fees" className="section fees-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">費用について</h2>
                    <p className="section-subtitle">Fees</p>
                </div>

                <div className="fees-container">
                    <div className="fees-list">
                        {feeItems.map((item, index) => (
                            <div className="fee-item" key={index}>
                                <div className="fee-title-box">
                                    <Check size={20} className="fee-icon" />
                                    <h3 className="fee-title">{item.title}</h3>
                                </div>
                                <div className="fee-price-box">
                                    <span className="fee-price">{item.price}</span>
                                    <span className="fee-tax">（税込）</span>
                                </div>
                                <p className="fee-note">{item.note}</p>
                            </div>
                        ))}
                    </div>

                    <div className="fee-caveat">
                        <p>※上記は司法書士報酬の目安です。登録免許税・戸籍取得等の実費は別途必要となります。</p>
                        <p>※正式なお見積りは、ご相談内容を伺った上で提示させていただきます。</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Fees;
