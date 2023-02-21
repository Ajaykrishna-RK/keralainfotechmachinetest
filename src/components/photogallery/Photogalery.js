import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Photo from "../../assets/photo.jpeg"

function Photogalery() {
  return (
    <div>
<h3 style={{textAlign:"center",marginTop:"2%"}}>WHAT WE DO ?</h3>
<Container>
    <Row>
        <Col>
        <div style={{justifyContent:"center",alignItems:"center",margin:"0 auto",display:"flex"}}>
        <img width="100%" src={Photo} alt="" srcset="" />
        </div>
        </Col>
    </Row>
</Container>


    </div>
  )
}

export default Photogalery