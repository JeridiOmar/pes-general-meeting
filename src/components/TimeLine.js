import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";
// import WorkIcon from "@material-ui/icons/Work";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import SchoolIcon from "@material-ui/icons/School";
import StarIcon from "@material-ui/icons/Star";
import TimeLineElement from "./TimeLineElement";
import VideocamIcon from '@material-ui/icons/Videocam';
import GroupWorkIcon from '@material-ui/icons/GroupWork';

const TimeLine = () => {
    const program = [
        {
            title: "Opening Ceremony",
            subtitle: "(announcement of competition)",
            date: "14h - 14h30",
            icon: <FreeBreakfastIcon/>,
            color: "rgb(16, 204, 82)",
            key: 1,
            background: 'rgb(16, 204, 82)',
            textColor: "#fff"
        },
        {
            title: "Conference 1 ",
            subtitle: "(Energy transition in Tunisia: state role and opportunities \n, the contribution of IEEE PES to promote Energy Transition worldwide.\n" +
                ", adapting the climate change effects)",
            date: "14h30 - 16h 00",
            icon: <VideocamIcon/>,
            color: "rgb(33, 150, 243)",
            key: 2,
            background: '#fff',
            textColor: "#212529"
        },
        {
            title: "Musical Break",
            subtitle: "",
            date: "16h 00 - 16h15",
            icon: <MusicNoteIcon/>,
            color: "rgb(16, 204, 82)",
            background: 'rgb(16, 204, 82)',
            textColor: "#fff",
            key: 3

        },
        {
            title: "Workshop 1: Project management BMC",
            subtitle: "Workshop2: design thinking",
            date: "16h15 - 18h00 ",
            icon: <SchoolIcon/>,
            color: "rgb(233, 30, 99)",
            background: 'rgb(233, 30, 99)',
            textColor: "#fff",
            key: 4

        },
        {
            title: "Break",
            subtitle: "",
            date: "18h00-18h15",
            icon: <FreeBreakfastIcon/>,
            color: "rgb(33, 150, 243)",
            key: 5,
            background: '#fff',
            textColor: "#212529"
        },
        {
            title: "Workshop 3 : Photovoltaic solar energy  ",
            subtitle: "",
            date: "18h15 - 20h00 ",
            icon: <SchoolIcon/>,
            color: "rgb(233, 30, 99)",
            background: 'rgb(233, 30, 99)',
            textColor: "#fff",
            key: 13

        },
        {
            title: "IEEE PES Tunisia section assembly",
            subtitle: "",
            date: "20h00-22h00",
            icon: <VideocamIcon/>,
            color: "rgb(33, 150, 243)",
            background: '#fff',
            textColor: "#212529",
            key: 6

        },
        {
            title: "DAY 2:6th of December 2020",
            subtitle: "",
            date: "",
            icon: <StarIcon/>,
            color: "rgb(16, 204, 82)",
            key: 7,
            background: '#fff',
            textColor: "#212529"
        },
        {
            title: "Workshop 4 :Pitching",
            subtitle: "",
            date: "10h00-11h30 ",
            icon: <SchoolIcon/>,
            color: "rgb(233, 30, 99)",
            background: 'rgb(233, 30, 99)',
            textColor: "#fff",
            key: 8

        },
        {
            title: "Conference 2: Switching to Energy 4.0 :effects on the oil and gas sector ",
            subtitle: "",
            date: "11H45-13H00",
            icon: <VideocamIcon/>,
            color: "rgb(33, 150, 243)",
            key: 9,
            background: '#fff',
            textColor: "#212529"
        },
        {
            title: "Submission of the projects",
            subtitle: "",
            date: "13H00 ",
            icon: <GroupWorkIcon/>,
            color: "rgb(33, 150, 243)",
            key: 10,
            background: '#fff',
            textColor: "#212529"
        },
        {
            title: "Evaluation of the projects by the jury ",
            subtitle: "",
            date: "14H00-16H00",
            icon: <VideocamIcon/>,
            color: "rgb(33, 150, 243)",
            key: 11,
            background: '#fff',
            textColor: "#212529"
        },
        {
            title: "Closing ceremony ",
            subtitle: "(results announcment, Awards...)",
            date: "16H00-17H00",
            icon: <VideocamIcon/>,
            color: "rgb(16, 204, 82)",
            background: 'rgb(16, 204, 82)',
            textColor: "#fff",
            key: 12,

        }
    ];
    return (

        <VerticalTimeline>
            {program.map((programItem) => <TimeLineElement title={programItem.title}
                                                           icon={programItem.icon}
                                                           date={programItem.date}
                                                           subtitle={programItem.subtitle}
                                                           key={programItem.key}
                                                           textColor={programItem.textColor}
                                                           background={programItem.background}
                                                           color={programItem.color}/>)}
            {/*    <VerticalTimelineElement*/}
            {/*        className="vertical-timeline-element--work"*/}
            {/*        // contentStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}*/}
            {/*        // contentArrowStyle={{borderRight: '7px solid  rgb(33, 150, 243)'}}*/}
            {/*        date="14h - 14h30"*/}
            {/*        iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}*/}
            {/*        icon={<FreeBreakfastIcon/>}*/}
            {/*    >*/}
            {/*        <h3 className="vertical-timeline-element-title">Opening Ceremony </h3>*/}
            {/*        <h4 className="vertical-timeline-element-subtitle">(announcement of*/}
            {/*            competition)</h4>*/}
            {/*        <p>*/}
            {/*            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, fuga?*/}
            {/*        </p>*/}
            {/*    </VerticalTimelineElement>*/}
            {/*    <VerticalTimelineElement*/}
            {/*        className="vertical-timeline-element--work"*/}
            {/*        date="14h30 - 16h 00"*/}
            {/*        iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}*/}
            {/*        icon={<WorkIcon/>}*/}
            {/*    >*/}
            {/*        <h3 className="vertical-timeline-element-title">Conference 1</h3>*/}
            {/*        <h4 className="vertical-timeline-element-subtitle">Energy transition in Tunisia,*/}
            {/*            Social*/}
            {/*            Dimensions of energy transition and Contribution*/}
            {/*            of IEEE PES in promoting Energy Transition</h4>*/}
            {/*        <p>*/}
            {/*            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius esse et magnam*/}
            {/*            natus placeat? Ad aliquid amet asperiores assumenda consequuntur cupiditate*/}
            {/*            dolores esse eum, exercitationem hic id ipsum labore maiores modi officiis*/}
            {/*            perferendis perspiciatis qui quia quidem quo veritatis vero vitae voluptatem?*/}
            {/*            Accusamus aliquid earum error eveniet nihil ullam veniam?*/}
            {/*        </p>*/}
            {/*    </VerticalTimelineElement>*/}
            {/*    <VerticalTimelineElement*/}
            {/*        className="vertical-timeline-element--work"*/}
            {/*        date="16h 00 - 16h15 "*/}
            {/*        iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}*/}
            {/*        icon={<MusicNoteIcon/>}*/}
            {/*    >*/}
            {/*        <h3 className="vertical-timeline-element-title">Musical Break</h3>*/}
            {/*        <h4 className="vertical-timeline-element-subtitle">Lorem ipsum dolor.</h4>*/}
            {/*        <p>*/}
            {/*            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid atque eum*/}
            {/*            fugiat impedit sapiente tempore tenetur voluptatum! Dolore, ipsum, sed!*/}
            {/*        </p>*/}
            {/*    </VerticalTimelineElement>*/}
            {/*    <VerticalTimelineElement*/}
            {/*        className="vertical-timeline-element--work"*/}
            {/*        date="2008 - 2010"*/}
            {/*        iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}*/}
            {/*        icon={<WorkIcon/>}*/}
            {/*    >*/}
            {/*        <h3 className="vertical-timeline-element-title">Web Designer</h3>*/}
            {/*        <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>*/}
            {/*        <p>*/}
            {/*            User Experience, Visual Design*/}
            {/*        </p>*/}
            {/*    </VerticalTimelineElement>*/}

            {/*    <VerticalTimelineElement*/}
            {/*        className="vertical-timeline-element--education"*/}
            {/*        date="April 2013"*/}
            {/*        iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}*/}
            {/*        icon={<SchoolIcon/>}*/}
            {/*    >*/}
            {/*        <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile*/}
            {/*            and Social*/}
            {/*            Media</h3>*/}
            {/*        <h4 className="vertical-timeline-element-subtitle">Online Course</h4>*/}
            {/*        <p>*/}
            {/*            Strategy, Social Media*/}
            {/*        </p>*/}
            {/*    </VerticalTimelineElement>*/}
            {/*    <VerticalTimelineElement*/}
            {/*        className="vertical-timeline-element--education"*/}
            {/*        date="November 2012"*/}
            {/*        iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}*/}
            {/*        icon={<SchoolIcon/>}*/}
            {/*    >*/}
            {/*        <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>*/}
            {/*        <h4 className="vertical-timeline-element-subtitle">Certification</h4>*/}
            {/*        <p>*/}
            {/*            Creative Direction, User Experience, Visual Design*/}
            {/*        </p>*/}
            {/*    </VerticalTimelineElement>*/}
            {/*    <VerticalTimelineElement*/}
            {/*        className="vertical-timeline-element--education"*/}
            {/*        date="2002 - 2006"*/}
            {/*        iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}*/}
            {/*        icon={<SchoolIcon/>}*/}
            {/*    >*/}
            {/*        <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive*/}
            {/*            Digital Media*/}
            {/*            Visual Imaging</h3>*/}
            {/*        <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>*/}
            {/*        <p>*/}
            {/*            Creative Direction, Visual Design*/}
            {/*        </p>*/}
            {/*    </VerticalTimelineElement>*/}
                <VerticalTimelineElement
                    iconStyle={{background: 'rgb(16, 204, 82)', color: '#fff'}}
                    icon={<StarIcon/>}
                />
        </VerticalTimeline>

    );
};

export default TimeLine;
