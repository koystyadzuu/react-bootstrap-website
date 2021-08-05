import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Jumbotron from "./Components/Jumbotron";
import {Col, Container, Row} from "react-bootstrap";
import Onecar2 from "./onecar2.png";
import styled from "styled-components";
import Footer from "./Components/Footer";


const Styles = styled.div`
    .OnecarBG{
    transform: scale(-1, 1);
    }
    
    .Par{
    margin-top: 130px;
    font-size: 16px;
    font-weight: 200;
    }
    
    h1 {
    
    font-size: 15px;
    line-height: 1.4em;
    font-weight: 600;  
    
    
    }
`

export const About = () =>(
    <>
    <Jumbotron/>
        <Container>
            <Row>
                <Col md={7}>
                    <Styles>
                        <div className="Par">
                            <h1>A STATEMENT FROM LAND ROVER</h1>
                            <p>We’ve always believed in going Above and Beyond.
                                This resilience has never been more appropriate.
                                Our global family will do everything we can to support people with the passion and capability Land Rover is so proud of.
                                It’s not easy for anyone right now, but together we can and will get through this.
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and
                                scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap
                                into electronic typesetting, remaining essentially
                                unchanged.</p>
                        </div>
                    </Styles>
                </Col>

                <Col md={5}>
                    <Styles>
                        <img className="OnecarBG" src={Onecar2} height={400}/>
                    </Styles>
                </Col>
            </Row>
        </Container>
    </>

)