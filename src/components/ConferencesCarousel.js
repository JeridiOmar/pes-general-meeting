import React from "react";

import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

import ConfCard from "./ConfCard";
import {css} from '@emotion/react'
import mahdiMkawar from "../pictures/speakers/mahdi-mkawar.webp"
import fatmaChoura from "../pictures/speakers/fatma-choura.webp"
import mongiMarzoug from "../pictures/speakers/mongiMarzoug.webp"
import frankLambert from "../pictures/speakers/frank-lambert.webp"
import walidHassen from "../pictures/speakers/walid-hassen.webp"
import kamelBennaceur from "../pictures/speakers/kamel-bennaceur.webp"
import wissemHamzaoui from "../pictures/speakers/wissem-hamzaoui3.webp"
/** @jsxImportSource @emotion/react */

const ConferencesCarousel = () => {
    const conf = [
        {
            name: "Mkawar Mahdi",
            intro: "we are so glad to present our TRAINER MAHDI MKAOUAR.  He will lead the PROJECT MANAGEMENT training session in our IEEE PES TUNISIA GENERAL MEETING! ",
            description: "Project management trainer * Expert teacher in QHSE management * Skills development coach * Director of PSI consulting ",
            picture: mahdiMkawar,
            conference: "project management training session",
            fb: "https://www.facebook.com/events/414412376606526/?post_id=416187366429027&view=permalink&__cft__[0]=AZWWvMcS0gVE77jeQOp60u0kv4ZMNJWZVgm5YR7GUFuJ1hbzGHAqYCTiDroNUP_rM8nq2SyOWt0gZrU2vojyq6r_fWvJ9PnsovyfLMKd5Y-cgWDcwcHs-zpaqZAyVarFQspAvTgpmD8tMSMtFpx1ZO2-&__tn__=%2CO%2CP-R",
            li: "https://www.linkedin.com/in/mahdi-mkaouar-9490a3a7/",
            key: 1
        },

        {
            name: "Choura fatma",
            intro: "Here we are with our former Ms FATMA CHOURA, she will be one of our TRAINERS in the famous IEEE PES TUNISIA GENERAL MEETING, she will lead the DESIGN THINKING training session. ",
            description: "Student at Tunis Business School-University of Tunis * Vice Presidente Enactus-TBS *Design thinking is a process for creative problem solving. Design thinking has a human-centered core. It encourages organizations to focus on the people they're creating for, which leads to better products, services, and internal processes.",
            picture: fatmaChoura,
            conference: "Design thinking training session",
            fb: "https://www.facebook.com/events/414412376606526/?post_id=417017459679351&view=permalink&__cft__[0]=AZUTH9IoCE5AqVLYUE-fumzITu9qp6sUdA4Wk2CAXyL59h3ZNLZ1P8vhBOXNlnK61MnKzvptFTCDNalLki5cBVqp-TOZAPYAeh8ijT7E7tCI26hNTgEuURI1exE04ugpRoEs706FWV467EuV9zxeDLq_&__tn__=%2CO%2CP-R",
            li: "https://www.linkedin.com/in/fatma-choura-943734194/",
            key: 2
        },
        {
            name: "Marzoug Mongi ",
            intro: "Mr Mongi Marzoug is the former minister of Energy, Mines and Energy Transition in Tunisia.\n" +
                "He will present a conference entitled '' Energy Transition in Tunisia : state role and opportunities'' ",
            description: "Former Minister of Energy, Mines and Energy Transition at Republic of Tunisia * Former Energy,Mines and Energy transition minister (february to september 2020) * Former energy and mines minister (january to august 2016) * Former ICT minister (2011 to 2014) * Senior VP internet and sustainable energy governance (october 2016to february 2020)",
            picture: mongiMarzoug,
            conference: "Conference",
            fb: "https://www.facebook.com/events/414412376606526/?post_id=419478702766560&view=permalink&__cft__[0]=AZUstz71dqcV2mbd0L96C228YUG04DR31C05QOyEVLDEvLJNz1OjRlNgZFaJhCSVzMTL21ZeUFX50inxhkxgbhRA3BZekY11yvfAMnfhIw-V9TDm5CK9eZCftFs_rkts66momQ0Ndho1l-N0OpnQK5JN&__tn__=%2CO%2CP-R",
            li: "https://www.linkedin.com/in/mongi-marzoug-256b7522/",
            key: 3
        },
        {
            name: "Frank lambert ",
            intro: " IEEE POWER AND ENERGY SOCIETY PRESIDENT will be present as a speaker in our IEEE PES TUNISIA GENERAL MEETING!!  It will be a unique opportunity to meet him and to know more about the energy transition worldwide. ",
            description: "Principal Research Engineer * IEEE power and energy society president",
            picture: frankLambert,
            conference:"Conference",
            li:"https://www.linkedin.com/in/frank-lambert-94455217/",
            fb:"https://www.facebook.com/events/414412376606526/?post_id=420337566014007&view=permalink&__cft__[0]=AZVn7JAbCT4xnuvyLJdEWhsbu8DeT9ZxnpKfM8Q2tAkTy9ATWyuCeQYXOaViqT0i8oRlY7OPta0eCUAeKfsx6frGV4RUF5C9Jnk3V7Eygpar-u0dpt_CBwN-P4ZaYbq6BbY3lyqBj2Z-3Yk6E3kJRnaS&__tn__=%2CO%2CP-R",
            key: 4
        },

        {
            name: "Hamzaoui wissem ",
            intro: "Mr Wissem Hamzaoui is goning to lead the Pitching training session.\n" +
                "This workshop is going to develop your skills in public speaking. ",
            description: "Engineer student in topography * T.S in civil engineering * Soft skills trainer at lo Coach * M.T at JCI Tunisia * Previously founder and B.E of university associations and clubs * Trainer advisor at CONECT",
            picture: wissemHamzaoui,
            conference:"Soft skills workshop",
            li:"https://www.linkedin.com/in/wissem-hamzaoui-878a17155/",
            fb:"https://www.facebook.com/events/414412376606526/?post_id=421088202605610&view=permalink&__cft__[0]=AZUrIAWszXuY7KREDauq19MrwBSD-95kMsIdE5u8QM-sUeNjDuENmVQct0ltLUlxJo6I8gjoWJ_Z2fgB4xpGkd7LsAnnCxgVFUhTsW67_j5dmihW-BVjDq17f9DiZr4nLqfZcO4JV1TCT63Afm2jgGo5&__tn__=%2CO%2CP-R",
            key: 5
        },
        {
            name: "Walid Hassen",
            intro: "Dr. Walid Hassen will lead the PHOTOVOLTAIC SOLAR ENERGY training session!  ",
            description: "Energy engineer * Lecturer in the energy engineering department of ENIM * president of the International Congress of Engineering and sustainable development in2019 2020 * Advisor and expert for several research and consulting firms  ",
            picture: walidHassen,
            conference:"Photovoltaic solar energy workshop",
            li:"https://www.linkedin.com/in/walid-hassen-5a57a2128/",
            fb:"https://www.facebook.com/events/414412376606526/?post_id=421888025858961&view=permalink&__cft__[0]=AZWq4L4o8scDnl0W2SFrLNrDj6FEiEC0GkW2MWEB1OJ5D3T76Ch_K3c4uBO_oQXfWbnKjKBl0S3kcE3tMOmwl-AmwlGaQgZDrO7QgS-TcGiFrdoyBQ9h6IvSfOxIXun_QvQG09AAviP3zHhQmWoNqIA6&__tn__=%2CO%2CP-R",
            key: 6
        },
        {
            name: "Bennaceur kamel ",
            intro: "We are pleased to present to you our 3rd SPEAKER Mr. KAMEL BENNACEUR, the Normadia Energy Consulting's CEO. ",
            description: "CEO of Normadia energy consulting since 2019 * Director of sustainable energy policies and technologies 2015-2017 * Minister of industry energy and mines 2014-2015",
            picture: kamelBennaceur,
            conference:"Conference",
            li:"https://www.linkedin.com/in/kamel-bennaceur-09a50a1/",
            fb:"https://www.facebook.com/events/414412376606526/?post_id=422601309120966&view=permalink&__cft__[0]=AZUAzoNz42d2PhoilTT2wJ80y2a1iunk65rE-SA9TE748uvfXK8Uf9A4U3yFc-S8eZdCnZ38M0NG7y4jxRjcuI5iJANb6oxyC06Xy-I7G_iJjwmnjui8PWMIhN8D0iwXZY2ZJi0i7eD3ecDUepkGS5ZM&__tn__=%2CO%2CP-R",
            key: 7
        }

    ];
    const responsive = {
        fullhd: {
            breakpoint: {max: 3000, min: 1600},
            items: 3,
            slidesToSlide: 1, // optional, default to 1.
            partialVisibilityGutter: 70
        },
        desktop: {
            breakpoint: {max: 1600, min: 1024},
            items: 2,
            slidesToSlide: 1, // optional, default to 1.
            partialVisibilityGutter: 70
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2,
            slidesToSlide: 2,// optional, default to 1.
            partialVisibilityGutter: 70
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
            partialVisibilityGutter: 50
        }
    };
    const carouselStyle = css`
    &{
      margin-top: 30px;
      margin-bottom:30px;
    }
    
    
`;
    return (
        <Carousel partialVisible={true} swipeable={true}
                  draggable={true} responsive={responsive} infinite
                  itemClass="carousel-item-padding-40-px"
                  css={carouselStyle}
                  removeArrowOnDeviceType={["tablet", "mobile"]}
        >
            {conf.map((confElement) => <ConfCard description={confElement.description}
                                                 conference={confElement.conference}
                                                 fb={confElement.fb}
                                                 li={confElement.li}
                                                 name={confElement.name}
                                                 intro={confElement.intro}
                                                 key={confElement.key}
                                                 picture={confElement.picture}
                />
            )}
        </Carousel>
    )
};
export default ConferencesCarousel;
