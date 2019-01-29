import React  from 'react' ; 
import { Container, Row, Col } from 'reactstrap';
import kid from './kid.jpg';
import aquoa from './aquaman.jpg';
import upside from './upside.jpg';
const Trending = () => {
        return (
            <Container className='mt-4' >
            <Row className='h-100'>
                <Col className='col'>   
                    <img  className='mr-2' src ={kid} alt='glass'  width='30%' /> 
                    <img  className='mr-2' src ={aquoa} alt='glass' width='30%' /> 
                    <img  className='mr-2' src ={upside} alt='glass' width='30%' /> 
                </Col>
               
            </Row>
        </Container>
        )
    } 


export default Trending;