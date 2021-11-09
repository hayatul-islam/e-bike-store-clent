import React from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router';

const NotFound = () => {
    const history = useHistory();
    const handleGoHome = () => {
        history.push('/')
    }
    return (
        <Container>
            <div className="py-5 mt-5 text-center h-100">
                <h1 style={{ fontSize: '60px', letterSpacing: '10px' }}>404</h1>
                <h2>Page Not Found!</h2>
                <button onClick={handleGoHome} className="btn btn-outline-dark mt-3 px-4 py-2 rounded-pill">Go To Home</button>
            </div>
        </Container>
    );
};

export default NotFound;