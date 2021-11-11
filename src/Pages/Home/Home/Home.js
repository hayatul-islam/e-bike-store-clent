import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import HighlightProducts from '../HighlightProducts/HighlightProducts';
import Reviews from '../Reviews/Reviews';
import LatestNews from './LatestNews/LatestNews';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <HighlightProducts />
            <Reviews />
            <LatestNews />
            <Footer />
        </div>
    );
};

export default Home;