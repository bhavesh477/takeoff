import React from 'react';
import './Header.scss';
import { Link } from "react-router-dom";
import { Image, Text, ChakraProvider, Flex, Center, Box } from "@chakra-ui/react";
import Logo from "../../../assets/images/flight.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigator = useNavigate();
  const handleHomeRedirection = () => {
    navigator("/");
  }
return (
  <div className="fixed-top">
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <ChakraProvider>
          <Box onClick={handleHomeRedirection}>
            <Flex justifyContent="center">
              <Center>
                
                <Image src={Logo} w="35px" h="35px" />
                <Text ml={2} color="white" fontSize="22px" fontWeight="bold">
                {/* <Link className="nav-link" to="/home"> */}
                  Takeoff
                  {/* </Link> */}
                </Text>
               
              </Center>
            </Flex>
            </Box>
          </ChakraProvider>
        </a>
        <img src="../../../assets/images/flight.png" alt="" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/flights">
                Flights
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/hotels">
                Hotels
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/bus">
                Bus
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/events">
                Events
              </Link>
            </li>
            <li className="nav-item ml-auto">
              <Link className="nav-link" to="/tour-packages">
                Tour Packages
              </Link>
            </li>
            <li className="nav-item ml-auto">
              <Link className="nav-link" to="/offers">
                Offers
              </Link>
            </li>
            <li className="nav-item ml-auto">
              <Link className="nav-link" to="/payment">
                Payment
              </Link>
            </li>
            <li className="nav-item ml-auto" >
              <Link className="nav-link" to="/login" >Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
)
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
