import React, {useEffect, useState} from "react";
import {css} from '@emotion/react'
import logoPes from '../pictures/LogoGM.png'


import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";


/** @jsxImportSource @emotion/react */
const NavbarPES = () => {
    const [navState, setNavState] = useState('notScrolled');

    const menuIcon = css`margin-right: 4px`;
//     const navStyle = css`
//         &.scrolled {
//         background-color: #2e911f !important;
//         transition: background-color 200ms linear;
// }
//          `;
    //managing change color when scrolled
    useEffect(() => {

         document.addEventListener('scroll', e => {

            let scrolled = document.scrollingElement.scrollTop;
            if (scrolled < 150) {
                setNavState("notScrolled");

            } else {
                setNavState("scrolled");

            }


        });
    }, []);

    return (
        // <nav className={`navbar navbar-expand-lg navbar-light fixed-top pes-nav  ${navState}`}  >
        //     <div className="container">
        //         <a className="navbar-brand" href="#"><img className={'p-0'} src={logo} alt="logo" width={'120'} height={'60'}  css={css`object-fit: cover;`}/></a>
        //         <button className="navbar-toggler" type="button" data-toggle="collapse"
        //                 data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        //                 aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //
        //         <div className="collapse navbar-collapse " id="navbarSupportedContent">
        //             <ul className="navbar-nav ml-auto  " css={css`
        //                   & a{
        //                   font-size: 13px !important;
        //                   text-transform: uppercase;
        //                   color:black !important;
        //                   }
        //                   `}>
        //                 <li className="nav-item active ">
        //                     <Link className="nav-link pr-1" to={"/"}><i className="fas fa-home" css={menuIcon}></i>Home</Link>
        //                 </li>
        //                 <li className="nav-item ">
        //                     <Link className="nav-link pr-1" to={'/about'}><i className="far fa-address-card" css={menuIcon}></i>About us</Link>
        //                 </li>
        //                 <li className="nav-item ">
        //                     <Link className="nav-link pr-1" to={'/activities'}><i className="far fa-newspaper"css={menuIcon}></i>Activities</Link>
        //                 </li>
        //                 <li className="nav-item ">
        //                     <Link className="nav-link pr-1" to={'/awards'}><i className="fas fa-award"css={menuIcon}></i>Awards</Link>
        //                 </li>
        //                 <li className="nav-item ">
        //                     <Link className="nav-link pr-1 comm-link" to={'/community/memberofthemonth'}><i className=" fas fa-user-friends"css={menuIcon}></i>Our community</Link>
        //                 </li>
        //
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
        <Navbar collapseOnSelect={true} expand="lg"  fixed="top" className={` pes-nav  ${navState}`}>
            <Container>
                <Navbar.Brand href="#home"><img className={'p-0'} src={logoPes} alt="logo" width={'120'} height={'60'}
                                                css={css`object-fit: cover;`}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto" css={css`
                          & a{
                          font-size: 13px !important;
                          text-transform: uppercase;
                          color:black !important;
                          margin-right: 15px;
                          }
                          `}>
                        {/*<Nav.Link  eventKey="1" > <i className="fas fa-home"css={menuIcon}></i>Home</Nav.Link>*/}
                        <Nav.Link  eventKey="2" onSelect={()=>document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}> <i className="far fa-address-card" css={menuIcon}></i>About</Nav.Link>
                        <Nav.Link  eventKey="3"onSelect={()=>document.getElementById('program').scrollIntoView({ behavior: 'smooth' })}><i className="far fa-calendar-alt" css={menuIcon}></i> Program</Nav.Link>
                        <Nav.Link  eventKey="4" onSelect={()=>document.getElementById('speaker').scrollIntoView({ behavior: 'smooth' })}><i className="far fa-id-card" css={menuIcon}></i>Speakers</Nav.Link>
                        <Nav.Link  eventKey="5" onSelect={()=>document.getElementById('award').scrollIntoView({ behavior: 'smooth' })}><i className="fas fa-award" css={menuIcon}></i>Competition</Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};
export default NavbarPES
