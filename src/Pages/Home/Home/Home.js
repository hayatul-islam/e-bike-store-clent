import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import HighlightProducts from '../HighlightProducts/HighlightProducts';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <HighlightProducts />
            <Footer />
        </div>
    );
};

export default Home;