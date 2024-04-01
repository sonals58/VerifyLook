import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { HorizontalRule, Instagram, LinkedIn, GitHub, Language } from '@mui/icons-material'; // Importing icons from MUI
import '../css/footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <Container>
        <Row className='align-items-center justify-content-center'>
          <Col className='credits text-center' xs={12} sm={12} md={4} lg={4} xl={4}>
            <div>
              <h3>Copyright © 2024 SONAL SANGVI</h3>
            </div>
          </Col>
          <Col className='text-center' xs={12} sm={12} md={4} lg={4} xl={4}>
            <div className='social-media'>
              <HorizontalRule />
              <a href='#' target='_blank'><Language /></a>
              <a href='https://www.linkedin.com/in/sonal-sangvi/' target='_blank'><LinkedIn /></a>
              <a href='https://github.com/sonals58' target='_blank'><GitHub /></a>
              <a href='https://www.instagram.com/_.sonal.05/' target='_blank'><Instagram /></a>
              <HorizontalRule />
            </div>
          </Col>
          <Col className='text-center' xs={12} sm={12} md={4} lg={4} xl={4}>
            <div className='credits'>
              <h3>By</h3> 
              <h3 className='credits-name'> SONAL SANGVI</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
