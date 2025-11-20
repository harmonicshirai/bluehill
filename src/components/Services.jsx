import React from 'react';
import ServiceCard from './ServiceCard';
import { servicesData } from '../data/servicesData';
import './Services.css';

const Services = () => {
    return (
        <section id="services" className="section services-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">業務案内</h2>
                    <p className="section-subtitle">Service</p>
                </div>
                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
