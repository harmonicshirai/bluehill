import React, { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp, Check } from 'lucide-react';
import './Services.css';

const ServiceCard = ({ title, icon: Icon, description, checklistTitle, checklist, subSections, note, link }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={`service-card ${isExpanded ? 'expanded' : ''}`}>
            <div className="service-header" onClick={() => setIsExpanded(!isExpanded)}>
                <div className="service-icon-wrapper">
                    <Icon size={32} className="service-icon" />
                </div>
                <h3 className="service-title">{title}</h3>
            </div>

            <div className="service-content">
                <p className="service-description">{description}</p>

                {isExpanded && (
                    <div className="service-details">
                        {checklist && (
                            <div className="service-checklist-section">
                                <h4 className="service-subtitle">{checklistTitle || '主なご相談例'}</h4>
                                <ul className="service-checklist">
                                    {checklist.map((item, index) => (
                                        <li key={index}>
                                            <Check size={16} className="check-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {subSections && subSections.map((section, index) => (
                            <div key={index} className="service-subsection">
                                <h4 className="service-subtitle">{section.title}</h4>
                                <p>{section.content}</p>
                            </div>
                        ))}

                        {note && (
                            <div className="service-note">
                                <p>{note}</p>
                            </div>
                        )}
                    </div>
                )}
            </div>

            <div className="service-footer">
                <button
                    className="service-expand-btn"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {isExpanded ? '閉じる' : '詳しく見る'}
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
            </div>
        </div>
    );
};

export default ServiceCard;
