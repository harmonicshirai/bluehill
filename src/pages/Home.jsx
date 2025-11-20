import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Strengths from '../components/Strengths';
import Flow from '../components/Flow';
import Fees from '../components/Fees';
import Profile from '../components/Profile';
import News from '../components/News';
import Access from '../components/Access';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="home-page">
            <Header />
            <main>
                <Hero />
                <Services />
                <Strengths />
                <Flow />
                <Fees />
                <Profile />
                <News />
                <Access />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
