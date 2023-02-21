import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { BsFacebook } from "react-icons/bs"
import { AiFillYoutube,AiFillLinkedin,AiOutlineTwitter } from "react-icons/ai";
import "./Header.css";
import Logo from "../assets/logo.jpeg"

export default function () {
  return (
    <div>


      <Navbar bg="danger">
        <Container>
          <Navbar.Brand href="#home">
            <div className="navbar-links">info@compamyname.com</div>
          </Navbar.Brand>

          <Navbar.Brand href="#home">
            <div className="navbar-links">7652354712,6355365624</div>
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Navbar style={{ backgroundColor: "rgb(88, 85, 85)" }}>
        <Container>
        <Navbar.Brand href="#home">
            <div className="navbar-links">UAE &nbsp; QATAR</div>
          </Navbar.Brand>

          <Navbar.Brand href="#home">
            <div className="navbar-links"><AiFillYoutube/> &nbsp;
            <AiOutlineTwitter/> &nbsp;
            <BsFacebook/> &nbsp;
            <AiFillLinkedin/> &nbsp;
            </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br />
    </div>
  );
}
