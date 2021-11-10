import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import HighlightProducts from '../HighlightProducts/HighlightProducts';
import Review from '../Review/Review';
import LatestNews from './LatestNews/LatestNews';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <HighlightProducts />
            <Review />
            <LatestNews />
            <Footer />
        </div>
    );
};

export default Home;