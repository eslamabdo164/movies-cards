import React  from 'react' ; 
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button } from 'reactstrap';
const Cards = ({title , genre , description , init}) => {
    if(!init && title) {
        return (
            <Container>
            <Row>
                <Col>   
                    <Card className='text-left w-25'>
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