import React from "react";


import {css} from '@emotion/react'
import Fade from 'react-reveal/Fade';
import banner2 from "../pictures/banner1.webp"
import Jump from "react-reveal/Jump";
import CountDown from "./CountDown"

import 'react-vertical-timeline-component/style.min.css';

import background from "../pictures/background.webp"
import awardBackground from "../pictures/award-backgroundjpg.webp"
import "bootstrap/dist/css/bootstrap.min.css"
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ConferencesCarousel from "./ConferencesCarousel";
import VideocamIcon from '@material-ui/icons/Videocam';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import AwardCard from "./AwardCard";
import Footer from "./Footer";
import TimeLine from "./TimeLine";
import TeaserModel from "./TeaserModel";
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const Gm = () => {

    const bannerStyle = css`
    &{
        background-image: url(${banner2});
        position: relative;
        height: 100vh;
        background-attachment: fixed;
        background-size:cover;
        background-position: center center;
        display: flex;
        align-items: center;
        justify-content: space-around; 
        //clip-path: polygon(0 0, 100% 0, 100% 88%, 57% 100%, 0 86%);
  }
  & .overlay{
    background: rgba(4,9,30,0.85);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  @media(max-width: 750px){
    &{
        //clip-path: polygon(0 0, 100% 0, 100% 50%, 100% 93%, 55% 100%, 0 92%) !important;
    }
  }
   
      
  `;
    const headerStyle = css`
     & h1{ 
     
     //font-size: 100px;
    font-family: 'Cabin', sans-serif;
    // margin-top:90px;
    margin-top: 90px;
    /*background:linear-gradient(94deg, rgba(83,141,34,1) 0%, rgba(94,142,86,0.0984768907563025) 88%, rgba(214,214,214,1) 99%);*/
    /*-webkit-background-clip: text;*/
    /*-webkit-text-fill-color: transparent;*/
   color: #f2e8cf;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    word-spacing: 2px;
    }
    & h3{
    margin-top: 20px;
      font-family: 'Cabin', sans-serif;
      color: #f2e8cf;
      font-size:30px;
        font-weight: 300;
       
        letter-spacing: 1px;
        word-spacing: 2px;
    }
    & button{
    margin-top: 50px;
    }
    //& button {
    //margin-top: 50px;
    //  padding: 10px 35px;
    //  border-radius: 20px;
    //  border: 0;
    //  outline: none;
    //  font-style: italic;
    //  font-weight: 700;
    //  font-size: 14px;
    //  color: #ffffff;
    //  background-color: #ff6000;
    //  transition-duration: 0.4s;
    //}
    //& button:hover,
    //& button:focus,
    //& button:active:focus {
    //  outline: none;
    //  color: #ffffff;
    //  background-color: #FF7E00;
    //}
    
    
    & .icon {
      font-size: 48px;
    cursor: pointer;
    background-color: #ffffff;
    border-radius: 50%;
    width: 6rem;
    height: 6rem;
    line-height: 6rem;
    position: relative;
    display: inline-block;
    transition: all 0.25s;
    color: #353535;
    }
    & h5{
        color:#f2e8cf
    }
    & button {
      -webkit-box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.3);
      -moz-box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.3);
      box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.3);
    }
    @media(max-width: 750px){
       & h1{ 
        margin-top:60px;
        font-size: 20px;
        
    }
    & h3{
      font-size: 13px;
    }
    }
  `;
//     const titleStyle = css`
//     //text-decoration:  underline overline;
//     font-weight: bold;
//     padding: 5px;
//     position: relative;
//     margin-bottom: 30px;
//     margin-top: 30px;
//     color: #212529;
//     &::before {
//     content: '';
//     position: absolute;
//     display: block;
//     width: 250px;
//     height: 1px;
//     background: white;
//     bottom: 1%;
//     //bottom: 90px;
//     left: calc(50% - 125px);
// }
//
// &::after {
//     content: '';
//     position: absolute;
//     display: block;
//     width: 40px;
//     height: 3px;
//     background: #2e911f;
//    bottom:0%;
//     left: calc(50% - 20px);
// }
//
//
//      `;
    const aboutStyle = css`
    & .about-title{
        display: inline-block;
        font-size: 4rem;
        font-weight: bold;
        text-transform: uppercase!important;
        color: #000;
        margin-top: 30px;
        
    }
    & .partner-section{
    margin-bottom: 30px;
    }
    & .partner-text{
        display: inline-block;
        font-size: 2.25rem;
        font-weight: bold;
        text-transform: uppercase!important;
        color: #000;
        
    }
    & p{
        color: #777;
        font-family: "Poppins",sans-serif;
        font-size: 16px;
        font-weight: 300;
        margin-bottom: 30px;
    }
    & img{
      object-fit: cover;
     -webkit-filter: drop-shadow(16px 16px 10px rgba(0,0,0,0.9));
      filter: drop-shadow(16px 16px 10px rgba(0,0,0,0.9));
    }
    @media(max-width: 760px){
    & h2{
      font-size: 2.5rem !important;
    }
    }
    // @media(max-width: 700px){
    //  & img{
    //    width: 100%;
    // }
    //}
  `;
    const programStyle = css`
  & {
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 150px;
        //background-image: url("https://preview.colorlib.com/theme/confe/images/img_2.jpg");
        background-image: url(${background});
        background-size: cover;
        background-attachment: fixed;
        //margin-bottom: 10%;
    
    }
    &{
      position: relative;
    }
    & .overlay{
    background: rgba(4,9,30,0.85);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 3;
  }
    & h3 {
    font-size: 50px;
    font-weight: 100;
    text-transform: uppercase;
    letter-spacing: 1px;
    word-spacing: 2px;
    animation-delay: .6s;
    color: rgba(255, 255, 255, .8);
    font-family: 'Rubik', sans-serif;
    z-index: 5;
}
@media(max-width: 760px){
  & h3{
    font-size: 40px;
  }
}
  `;
    const awardStyle = css`
  & {
        //display: flex;
        //align-items: center;
        //justify-content: space-around;
        //height: 150px;
        background-image: url(${awardBackground});
        background-size: cover;
        //background-attachment: fixed;
        //margin-bottom: 10%;
        position: relative;
    
    }
    &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(4,9,30,0.85);
    z-index: 9;
    }
   
  //  & .overlay{
  //  background: rgba(4,9,30,0.85);
  //  position: absolute;
  //  left: 0;
  //  right: 0;
  //  top: 0;
  //  bottom: 0;
  //  z-index: 3;
  //}
  & .container {
  z-index: 10;
  position: relative;
  }
    & h3 {
    font-size: 50px;
    font-weight: 100;
    text-transform: uppercase;
    letter-spacing: 1px;
    word-spacing: 2px;
    animation-delay: .6s;
    color: rgba(255, 255, 255, .8);
    font-family: 'Rubik', sans-serif;
    z-index: 11;
    margin-top: 50px;
    margin-bottom: 30px;
}
    & .content{
    z-index:11;
    }
@media(max-width: 760px){
  & h3{
    font-size: 40px;
  }
}
  `;

    function getModalStyle() {

        return {
            top: `50%`,
            left: `50%`,
            transform: `translate(-50%, -50%)`,
        };
    }

    const useStyles = makeStyles((theme) => ({
        paper: {
            position: 'absolute',
            width: " 75%",
            height: "calc((70vw * 9) / 16)",
            [theme.breakpoints.down('sm')]: {
                width: "92%",
                height: "calc((92vw * 9) / 16)"
            }

            // // backgroundColor: theme.palette.background.paper,
            // // border: '2px solid #000',
            // // boxShadow: theme.shadows[5],
            // padding: theme.spacing(2, 4, 3),
        },
    }));
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    /** @jsxImportSource @emotion/react */

    return (
        <div>

            <div css={bannerStyle}>
                <div className="overlay"></div>
                <div css={headerStyle}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <Jump forever duration={1500}>
                                    <h1 id={"banner-title"}>PES Tunisia General Meeting</h1>
                                </Jump>
                                <Fade bottom delay={1500}>
                                    <h3>Various conferences, workshops and training sessions</h3>
                                </Fade>
                                <Fade bottom delay={1500}>
                                    <CountDown timeTillDate="12 05 2020, 6:00 am" timeFormat="MM DD YYYY, h:mm a"/>
                                </Fade>
                                <div onClick={() => setOpen(true)}><span className={"icon"}><i
                                    className="fab fa-youtube"></i></span></div>
                                {/*<h5>Event teaser</h5>*/}
                                <ButtonGroup variant="contained" color="primary"
                                             aria-label="large contained primary button group">
                                    <Button><VideocamIcon/> Join as a participant</Button>
                                    <Button><GroupWorkIcon/> Join the competition</Button>

                                </ButtonGroup>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="simple-modal-title"
                                    aria-describedby="simple-modal-description"
                                >
                                    <div style={modalStyle} className={classes.paper}>
                                        {/*<iframe style={{width: "100%", height: "100%"}} src="https://www.youtube.com/embed/MGzmtWi4Oq0"*/}
                                        {/*        frameBorder="0"*/}
                                        {/*        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
                                        {/*        allowFullScreen></iframe>*/}
                                        <iframe style={{width: "100%", height: "100%"}}
                                                src="https://www.youtube.com/embed/RNMdLUUN_dM"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen></iframe>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div style={{
                'backgroundColor': '#e3e3e3', "z-index": "1",
                'position': 'relative'
            }}>
                <div className="container " id={"about"} css={aboutStyle}>
                    <div className="row  ">
                        <div className="col-12 col-md-7 mx-auto text-left ">
                            <Fade left distance={"10%"}>
                                <h2 className="about-title mb-5">
                                    About the congress
                                </h2>
                            </Fade>
                        </div>

                        {/*<div className="col-12 col-md-4  ">*/}
                        {/*    <img className={"w-100 "}*/}
                        {/*         src={about} alt=""/>*/}
                        {/*</div>*/}
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-7 col-8 ">
                            <Fade right distance={"20%"}>
                                <p>
                                    We are so glad to announce the launch of our event 𝐈𝐄𝐄𝐄 𝐏𝐄𝐒 𝐓𝐔𝐍𝐈𝐒𝐈𝐀
                                    𝐆𝐄𝐍𝐄𝐑𝐀𝐋 𝐌𝐄𝐄𝐓𝐈𝐍𝐆 in his 2nd edition
                                    The PES TUNISIA GENERAL MEETING is a national scale congress.
                                    Each year, one of IEEE PES Tunisia's student branch chapters has the honor to
                                    organize it. We are proud to announce that 𝐈𝐄𝐄𝐄 𝐏𝐄𝐒 𝐈𝐍𝐒𝐀𝐓 𝐒𝐁𝐂 is the
                                    chosen one this year.
                                    PES TUNISIA GENERAL MEETING is an opportunity for all IEEE members and non members
                                    to meet and to better know all about Power and Energy.
                                    Our event will be held on the 5th and 6th of December and it is themed
                                    "𝐄𝐍𝐄𝐑𝐆𝐘 𝐓𝐑𝐀𝐍𝐒𝐈𝐓𝐈𝐎𝐍 ". <br/>It is going to be a two-day congress that includes
                                    various conferences, workshops and training sessions for the teams about the
                                    technical and soft skills needed for the competition and for all students and
                                    professionals hwo want yo develop their skills.
                                </p>
                            </Fade>
                        </div>

                    </div>
                    <div className="row partner-section  ">
                        <div className="col-12 col-md-7 mx-auto  text-left ">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <Fade left distance={"10%"}>
                                        <h2 className=" partner-text">
                                            We Work With the <br/>
                                            Best Partners
                                        </h2>
                                    </Fade>

                                </div>
                                <Fade right distance={"10%"}>
                                    <div className="col-6 col-md-3">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Orange_logo.svg/1022px-Orange_logo.svg.png"
                                            alt="" width={"125"}/>
                                    </div>
                                    <div className="col-6 col-md-3">
                                        <img
                                            src="https://scontent.ftun1-1.fna.fbcdn.net/v/t1.15752-9/121963700_810003693161283_1780937212263407769_n.png?_nc_cat=104&ccb=2&_nc_sid=ae9488&_nc_ohc=NG0gp0EC4o8AX-XgdBV&_nc_ht=scontent.ftun1-1.fna&oh=ca21888771300bfb6a62760c59e12179&oe=5FE25095"
                                            alt="" width={"125"}/>
                                    </div>
                                </Fade>
                            </div>

                        </div>

                    </div>
                </div>
                <div css={programStyle}>
                    <div className="overlay"></div>
                    <h3 className="text-center">Our program</h3>
                </div>
                <div className="container">
                    <div className="row" id={"program"}>
                        <div className="col-12">
                            {/*<div className="text-center">*/}
                            {/*    /!*<img src={logo} alt="" width={"120px"} height={"60px"} className={"facts-logo text-center"}/>*!/*/}
                            {/*    <h3 className="text-center  section-title" css={titleStyle}><span*/}
                            {/*        style={{color: "#2e911f"}}>Event</span> program</h3>*/}
                            {/*</div>*/}
                            <TimeLine/>

                        </div>
                    </div>
                </div>
                <div css={programStyle}>
                    <div className="overlay"></div>
                    <h3 className="text-center">Our conferences and trainers</h3>
                </div>
                <div className="container-fluid" style={{marginBottom: '50px'}}>
                    <div className="row" id={"speaker"}>
                        <div className="col-12">

                            <ConferencesCarousel/>
                        </div>
                    </div>
                </div>
                <div css={awardStyle}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="text-center">Competetion and award</h3>
                            </div>
                        </div>
                        <div className="row " id="award">
                            <div className="col-12 d-flex justify-content-center w-100" style={{marginBottom: "150px"}}>
                                <Fade bottom>
                                    <AwardCard/>
                                </Fade>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        // <div>
        //     {/*<div className="se-pre-con"></div>*/}
        //     <div className="container">
        //         <div className="row">
        //             <div className="col-md-12">
        //                 <div className="header-logo-wrapper">
        //                     <img src="images/avion_logo.png" alt="avion" title="Avion Template"
        //                          className="img-responsive center-block"/>
        //                 </div>
        //             </div>
        //         </div>
        //
        //         <div className="row">
        //             <div className="col-md-12">
        //                 <h1 className="text-center">We will be back with new and exciting feature!</h1>
        //                 <h3 className="text-center">turpis gravida vel donec id tuarpis tellus odio magna</h3>
        //             </div>
        //         </div>
        //
        //         <div className="row">
        //             <div className="col-md-12">
        //                 <div id="counter_wrapper">
        //                     <div className="text-center" id="counter"></div>
        //                 </div>
        //             </div>
        //         </div>
        //
        //         <div className="text-center subscribe-form-wrapper">
        //             <form action="#" className="form-inline">
        //
        //
        //                 <button type="submit" className="btn btn-default">Subscribe</button>
        //             </form>
        //         </div>
        //
        //         <div className="row">
        //             <div className="col-md-12">
        //                 <div className="social-media-wrapper text-center">
        //                     <a href="#"><i className="fa fa-pinterest"></i></a>
        //                     <a href="#"><i className="fa fa-facebook-official"></i></a>
        //                     <a href="#"><i className="fa fa-google-plus-official"></i></a>
        //                     <a href="#"><i className="fa fa-twitter"></i></a>
        //                     <a href="#"><i className="fa fa-instagram"></i></a>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

    )
};
export default Gm;
