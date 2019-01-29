import React  from 'react' ; 
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button } from 'reactstrap';
import searchImg from './searchImg.svg';
const Cards = ({title , genre , description , init , phase}) => {
    if(!init && title && phase !== 'Movie Not Found') {
        return (
            <Container className='mt-4 d-flex' >
            <Row className='h-100'>
                <Col className='col-md-4 my-auto' > 
                    <img 
                    className='mt-4 ' 
                    style ={{"width" : "350px"}} 
                    src ={searchImg} alt='img' /> 
                </Col>
                <Col className='col-md-4'>   
                    <Card className='text-left shadow'>
                                <CardImg top width="100%" src="https://picsum.photos/318/180/" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle className='h3'>{title}</CardTitle>
                                    <CardSubtitle className='text-muted'>{genre}</CardSubtitle>
                                    <CardText className='text-justify'>{description}</CardText>
                                    <Button color='primary' className='btn-block'>Show Details</Button>
                                </CardBody>
                        </Card> 
                </Col>
            </Row>
            <hr />
        </Container>
        )
    } else {
        return(
            <div className='mt-3'>
           
                <p>{phase}</p>

            </div>
        )
    }      
}

export default Cards;