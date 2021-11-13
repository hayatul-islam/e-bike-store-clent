import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const LatestNews = () => {
    return (
        <div style={{ background: '#f3fcf8' }} className="py-5">
            <Container>
                <h1 className="text-center pt-3">LATEST NEWS</h1>
                <div className="d-flex justify-content-center pb-3">
                    <hr style={{ width: '70px', height: '5px', marginTop: '0px', background: 'black' }} />
                </div>
                <Row className="pb-5">
                    <Col xs={12} md={4}>
                        <Card className="mt-4">
                            <Card.Img style={{ height: '250px' }} variant="top" src="https://preview.hasthemes.com/exporso-preview/exporso/assets/img/blog/4.jpg" />
                            <Card.Body>
                                <Card.Title>Froome racing to spoil</Card.Title>
                                <Card.Text>
                                    Team Sky and Chris Froome are willing to take risks in the Giro's final stages.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4}>
                        <Card className="mt-4">
                            <Card.Img style={{ height: '250px' }} variant="top" src="https://ridestyle.7uptheme.net/wp-content/uploads/2019/02//Ridestyles-Blog-11-370x200.jpg" />
                            <Card.Body>
                                <Card.Title>Podium Cafe, for Cycling</Card.Title>
                                <Card.Text>
                                    Articles on fanposts, fanshots, women's cycling, live races and more. Your best source.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4}>
                        <Card className="mt-4">
                            <Card.Img style={{ height: '250px' }} variant="top" src="https://ridestyle.7uptheme.net/wp-content/uploads/2019/02//Ridestyles-Blog-12-370x200.jpg" />
                            <Card.Body>
                                <Card.Title>Cycling Weekly Magazine</Card.Title>
                                <Card.Text>
                                    Covers domestic and international racing, offers in-depth training , tests the latest.
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