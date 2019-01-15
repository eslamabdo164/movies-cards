import React  from 'react' ; 
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button } from 'reactstrap';
import searchImg from './searchImg.svg';
const Cards = ({title , genre , description , init}) => {
    if(!init && title) {
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
                                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle className='h3'>{title}</CardTitle>
                                    <CardSubtitle className='text-muted'>{genre}</CardSubtitle>
                                    <CardText className='text-justify'>{description}</CardText>
                                    <Button color='primary' className='btn-block'>Show Details</Button>
                                </CardBody>
                        </Card> 
                </Col>
            </Row>
        </Container>
        )
    } else {
        return(
            <div className='mt-3'>
           
                <p>Search for movies to get data ..</p>

            </div>
        )
    }      
}

export default Cards;