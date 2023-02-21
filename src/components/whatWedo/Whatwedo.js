import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import CardImage1 from "../../assets/cardimage1.jpeg"
import CardImage2 from "../../assets/cardimage2.jpeg"
import CardImage3 from "../../assets/cardimage3.jpeg"
import "./Whatwedo.css"


function Whatwedo() {
  return (
    <div>
<h3 style={{textAlign:"center",marginTop:"2%"}}>WHAT WE DO ?</h3>
<div className='cards-main' >
<Container >
<Row >
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={CardImage1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={CardImage2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={CardImage3} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
      </Row>
</Container>
</div>
    </div>
  )
}

export default Whatwedo