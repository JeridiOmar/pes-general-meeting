import React from "react";
import ReactDOM from "react-dom";

import {css, jsx} from '@emotion/react'
import Fade from 'react-reveal/Fade';
import banner2 from "../pictures/banner1.webp"
import Jump from "react-reveal/Jump";
import CountDown from "./CountDown"
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

import "bootstrap/dist/css/bootstrap.min.css"

import ConferencesCarousel from "./ConferencesCarousel";
import ConfCard from "./ConfCard";
import AwardCard from "./AwardCard";
import Footer from "./Footer";


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
    
    & button {
    margin-top: 50px;
      padding: 10px 35px;
      border-radius: 20px;
      border: 0;
      outline: none;
      font-style: italic;
      font-weight: 700;
      font-size: 14px;
      color: #ffffff;
      background-color: #ff6000;
      transition-duration: 0.4s;
    }
    & button:hover,
    & button:focus,
    & button:active:focus {
      outline: none;
      color: #ffffff;
      background-color: #FF7E00;
    }
    
    
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
        font-size: 25px;
        
    }
    & h3{
      font-size: 18px;
    }
    }
  `;
    const titleStyle = css`
    //text-decoration:  underline overline;
    font-weight: bold;
    padding: 5px;
    position: relative;
    margin-bottom: 30px;
    margin-top: 30px;
    color: #212529;
    &::before {
    content: '';
    position: absolute;
    display: block;
    width: 250px;
    height: 1px;
    background: white;
    bottom: 1%;
    //bottom: 90px;
    left: calc(50% - 125px);
}

&::after {
    content: '';
    position: absolute;
    display: block;
    width: 40px;
    height: 3px;
    background: #2e911f;
   bottom:0%;
    left: calc(50% - 20px);
}


     `;
    const aboutStyle = css`
    & h2{
        display: inline-block;
        font-size: 4rem;
        font-weight: bold;
        text-transform: uppercase!important;
        color: #000;
        margin-top: 30px;
        
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
      height: 330px;
    }
    @media(max-width: 760px){
    & h2{
      font-size: 2.5rem
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
        background-image: url("https://preview.colorlib.com/theme/confe/images/img_2.jpg");
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
        background-image: url("https://preview.colorlib.com/theme/confe/images/img_2.jpg");
        background-size: cover;
        background-attachment: fixed;
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
                                    <h1>PES Tunisia General Meeting</h1>
                                </Jump>
                                <Fade bottom>
                                    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, iusto?</h3>
                                </Fade>
                                <Fade bottom>
                                    <CountDown timeTillDate="12 07 2020, 6:00 am" timeFormat="MM DD YYYY, h:mm a"/>
                                </Fade>
                                <div><span className={"icon"}><i className="fab fa-youtube"></i></span></div>
                                {/*<h5>Event teaser</h5>*/}
                                <button className="btn btn-default">Join us</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div style={{'background-color': '#e3e3e3'}}>
                <div className="container " css={aboutStyle}>
                    <div className="row  ">
                        <div className="col-12 col-md-7 mx-auto text-left ">
                            <Fade left>
                                <h2 className="mb-5">
                                    About the conference
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
                            <Fade right>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum hic nam sequi sit
                                    ut!
                                    Aut commodi distinctio facere ipsum molestiae mollitia repellendus sit velit
                                    voluptas.
                                    Cumque ipsa laborum porro! Alias commodi cum dolores eos facere facilis ipsam
                                    laboriosam
                                    laborum laudantium magni, molestias nemo odit pariatur sunt ut voluptates
                                    voluptatibus
                                    voluptatum?
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci fugit non optio
                                    repellat vitae. Commodi illo itaque nulla quasi quidem soluta sunt temporibus
                                    tenetur
                                    ullam veritatis! Aliquid commodi odio officiis quaerat quod totam vel voluptate!
                                    Deleniti eaque ipsa maiores, nam necessitatibus pariatur quae quaerat quibusdam?
                                    Eveniet
                                    exercitationem id maiores minima?
                                </p>
                            </Fade>
                        </div>

                    </div>
                </div>
                <div css={programStyle}>
                    <div className="overlay"></div>
                    <h3 className="text-center">Our program</h3>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/*<div className="text-center">*/}
                            {/*    /!*<img src={logo} alt="" width={"120px"} height={"60px"} className={"facts-logo text-center"}/>*!/*/}
                            {/*    <h3 className="text-center  section-title" css={titleStyle}><span*/}
                            {/*        style={{color: "#2e911f"}}>Event</span> program</h3>*/}
                            {/*</div>*/}
                            <VerticalTimeline>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    // contentStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                                    // contentArrowStyle={{borderRight: '7px solid  rgb(33, 150, 243)'}}
                                    date="14h - 14h30"
                                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                                    icon={<FreeBreakfastIcon/>}
                                >
                                    <h3 className="vertical-timeline-element-title">Opening Ceremony </h3>
                                    <h4 className="vertical-timeline-element-subtitle">(announcement of
                                        competition)</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, fuga?
                                    </p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    date="14h30 - 16h 00"
                                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                                    icon={<WorkIcon/>}
                                >
                                    <h3 className="vertical-timeline-element-title">Conference 1</h3>
                                    <h4 className="vertical-timeline-element-subtitle">Energy transition in Tunisia,
                                        Social
                                        Dimensions of energy transition and Contribution
                                        of IEEE PES in promoting Energy Transition</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius esse et magnam
                                        natus placeat? Ad aliquid amet asperiores assumenda consequuntur cupiditate
                                        dolores esse eum, exercitationem hic id ipsum labore maiores modi officiis
                                        perferendis perspiciatis qui quia quidem quo veritatis vero vitae voluptatem?
                                        Accusamus aliquid earum error eveniet nihil ullam veniam?
                                    </p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    date="16h 00 - 16h15 "
                                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                                    icon={<MusicNoteIcon/>}
                                >
                                    <h3 className="vertical-timeline-element-title">Musical Break</h3>
                                    <h4 className="vertical-timeline-element-subtitle">Lorem ipsum dolor.</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid atque eum
                                        fugiat impedit sapiente tempore tenetur voluptatum! Dolore, ipsum, sed!
                                    </p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    date="2008 - 2010"
                                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                                    icon={<WorkIcon/>}
                                >
                                    <h3 className="vertical-timeline-element-title">Web Designer</h3>
                                    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                                    <p>
                                        User Experience, Visual Design
                                    </p>
                                </VerticalTimelineElement>

                                <VerticalTimelineElement
                                    className="vertical-timeline-element--education"
                                    date="April 2013"
                                    iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
                                    icon={<SchoolIcon/>}
                                >
                                    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile
                                        and Social
                                        Media</h3>
                                    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                                    <p>
                                        Strategy, Social Media
                                    </p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--education"
                                    date="November 2012"
                                    iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
                                    icon={<SchoolIcon/>}
                                >
                                    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                                    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                                    <p>
                                        Creative Direction, User Experience, Visual Design
                                    </p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--education"
                                    date="2002 - 2006"
                                    iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
                                    icon={<SchoolIcon/>}
                                >
                                    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive
                                        Digital Media
                                        Visual Imaging</h3>
                                    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                                    <p>
                                        Creative Direction, Visual Design
                                    </p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    iconStyle={{background: 'rgb(16, 204, 82)', color: '#fff'}}
                                    icon={<StarIcon/>}
                                />
                            </VerticalTimeline>

                        </div>
                    </div>
                </div>
                <div css={programStyle}>
                    <div className="overlay"></div>
                    <h3 className="text-center">Our conferences and trainers</h3>
                </div>
                <div className="container" style={{marginBottom:'50px'}}>
                    <div className="row">
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
                        <div className="row">
                            <div className="col-12 d-flex justify-content-center" style={{marginBottom:"150px"}}>

                               <AwardCard/>
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
