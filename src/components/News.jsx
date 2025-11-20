import React from 'react';
import { ChevronRight } from 'lucide-react';
import './News.css';

const News = () => {
    const newsItems = [
        { date: '2023.12.01', category: 'お知らせ', title: '年末年始の休業について' },
        { date: '2023.11.15', category: 'コラム', title: '相続登記の義務化について解説しました' },
        { date: '2023.10.01', category: '実績', title: '渉外相続案件の解決事例を追加しました' },
    ];

    return (
        <section id="news" className="section news-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">お知らせ</h2>
                    <p className="section-subtitle">News</p>
                </div>

                <div className="news-list">
                    {newsItems.map((item, index) => (
                        <a href="#" className="news-item" key={index}>
                            <div className="news-meta">
                                <time className="news-date">{item.date}</time>
                                <span className="news-category">{item.category}</span>
                            </div>
                            <h3 className="news-title">{item.title}</h3>
                            <ChevronRight size={20} className="news-arrow" />
                        </a>
                    ))}
                </div>

                <div className="text-center mt-4">
                    <a href="#" className="btn btn-secondary">お知らせ一覧</a>
                </div>
            </div>
        </section>
    );
};

export default News;
