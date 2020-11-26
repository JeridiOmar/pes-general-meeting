import React from 'react';

import {VerticalTimelineElement} from "react-vertical-timeline-component";
import {css} from '@emotion/react'
/** @jsxImportSource @emotion/react */
const TimeLineElement = ({title, icon, color, subtitle, date,background,textColor}) => {
const timeLineStyle=css`
& .time-line-date{
  color:#212529 !important;
}
& .time-line-text{
  background-color: ${background}!important;
  color: ${textColor}!important;
}
`;
    return (

          <VerticalTimelineElement css={timeLineStyle}
                                   textClassName={"time-line-text"}
                className="vertical-timeline-element--work"
                // contentStyle={{background: background, color: textColor}}
                contentArrowStyle={{borderRight: `7px solid  ${background}`}}
                dateClassName={ "time-line-date" }
                // contentStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                // contentArrowStyle={{borderRight: '7px solid  rgb(33, 150, 243)'}}
                date={date}
                iconStyle={{background: color, color: '#fff'}}
                icon={icon}

            >
                <h3 className="vertical-timeline-element-title">{title} </h3>
                <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>

            </VerticalTimelineElement>

    )
};

export default TimeLineElement;
