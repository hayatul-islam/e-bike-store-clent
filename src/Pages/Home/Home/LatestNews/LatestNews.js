import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className="py-5">
            <Container>
                <h1 className="text-center pb-4">LATEST NEWS</h1>
                <Row>
                    <Col xs={12} md={4}>
                        <Card>
                            <Card.Img variant="top" src="https://preview.hasthemes.com/exporso-preview/exporso/assets/img/blog/4.jpg" />
                            <Card.Body>
                                <Card.Title>Froome racing to spoil</Card.Title>
                                <Card.Text>
                                    Team Sky and Chris Froome are willing to take risks in the Giro's final stages
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4}>
                        <Card>
                            <Card.Img variant="top" src="https://preview.hasthemes.com/exporso-preview/exporso/assets/img/blog/4.jpg" />
                            <Card.Body>
                                <Card.Title>Froome racing to spoil</Card.Title>
                                <Card.Text>
                                    Team Sky and Chris Froome are willing to take risks in the Giro's final stages
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4}>
                        <Card>
                            <Card.Img variant="top" src="https://preview.hasthemes.com/exporso-preview/exporso/assets/img/blog/4.jpg" />
                            <Card.Body>
                                <Card.Title>Froome racing to spoil</Card.Title>
                                <Card.Text>
                                    Team Sky and Chris Froome are willing to take risks in the Giro's final stages
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LatestNews;