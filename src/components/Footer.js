import React from "react";
import logo from "../pictures/logo-white.webp";

import {css} from '@emotion/react'
import "../App.css"
/** @jsxImportSource @emotion/react */
const Footer = () => {
    return (
        <footer>
            <div className="footer-top ">
                <div className="container ">
                    <div className="row ">
                        <div className="col-md-6 col-sm-12  footer-left ">
                            <img className="logo-footer " src={logo} alt="logo-footer"
                                 data-at2x="assets/img/logo.png" width={'140'} height={"80"}
                                 css={css`object-fit: contain;margin-left: -25px;`}/>
                            <h3 style={{color:"whitesmoke"}}>
                                IEEE PES INSAT SB
                            </h3>
                            <p>
                                The Power & Energy Society provides the world's largest forum for sharing the latest in
                                technological developments in the electric power industry, for developing standards that
                                guide the development and construction of equipment and systems, and for educating
                                members of the industry and the general public.
                            </p>


                        </div>
                        <div className="col-md-6 col-sm-12 footer-right ">
                            {/*<h3>Contact</h3>*/}
                            <p><i className="fas fa-map-marker-alt"></i> 676 INSAT Centre Urbain Nord BP، Tunis Cedex
                                1080</p>
                            <p><i className="fas fa-phone"></i> Phone: +216 5579319</p>
                            <p><i className="fas fa-envelope"></i> Email: <a css={css`text-decoration: none; `}
                                                                             href="mailto:hello@domain.com">ieeepesinsat@gmail.com
                            </a>
                            </p>
                            <div>
                                <a  target="_blank" href="https://www.facebook.com/PES.INSAT/"><i className="fab fa-facebook"></i></a>
                                <a target="_blank" href="https://www.linkedin.com/in/ieee-pes-chapter-insat-sb-92255a1b6/"><i
                                    className="fab fa-linkedin-in"></i></a>

                                <a target="_blank" href="https://www.instagram.com/ieee.pes.insat/"><i className="fab fa-instagram"></i></a>

                            </div>

                        </div>

                    </div>
                </div>
            </div>


        </footer>
    )
};
export default Footer;
