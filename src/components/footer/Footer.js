import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import map1 from "../../assets/map1.jpeg"
import map2 from "../../assets/map2.jpeg"
import "./Footer.css"
import { BsFacebook, BsYoutube } from "react-icons/bs"
import { AiFillYoutube,AiFillLinkedin,AiOutlineTwitter } from "react-icons/ai";

function Footer() {
  return (
    <div style={{marginTop:"50px"}}>
<Container>
  <Row>
    <Col>
<img width="100%" src={map1} alt=""  />
    </Col>
    <Col>
    <img width="100%" src={map2} alt=""  />
    </Col>
  </Row>
</Container>
<div className='footer-div'>
<div style={{marginTop:"1%"}}>
  <p>@2022 companyname.com All rights reserved</p>
</div>
<div style={{marginTop:"1%"}}>
  <p>
    <BsYoutube/>
    &nbsp;    &nbsp;
    <AiOutlineTwitter/>
    &nbsp;    &nbsp;
    <BsFacebook/>
    &nbsp;    &nbsp;
    <AiFillLinkedin/>

  </p>
</div>
<div style={{marginTop:"1%"}}>
  <p>site designrd by kerala infotech</p>
</div>
</div>
    </div>
  )
}

export default Footer