import React from 'react';
import Jump from "react-reveal/Jump";
import Fade from "react-reveal/Fade";
import GroupWorkIcon from "@material-ui/icons/GroupWork";
import Button from "@material-ui/core/Button";
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import makeStyles from "@material-ui/core/styles/makeStyles";
const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));
const BannerLive = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={"row"}>
                <div className="col-12 text-center">
                    <Jump forever duration={1500}>
                        <h1 id={"banner-title"}>PES Tunisia General Meeting</h1>
                    </Jump>
                    <Fade bottom delay={1500}>
                        <h3>Various conferences, workshops and training sessions</h3>
                    </Fade>

                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center ">
                    <h1>we are live <span>now!</span></h1>
                    <Button
                        onClick={() => window.open("https://ieeemeetings.webex.com/mw3300/mywebex/default.do?nomenu=true&siteurl=ieeemeetings&service=6&rnd=0.47634320557584875&main_url=https%3A%2F%2Fieeemeetings.webex.com%2Fec3300%2Feventcenter%2Fevent%2FeventAction.do%3FtheAction%3Ddetail%26%26%26EMK%3D4832534b00000004c09ca3fc40f86d5ccabf1145003979087912535df68afbc6a01eda8a05f39bfd%26siteurl%3Dieeemeetings%26confViewID%3D179604236111187592%26encryptTicket%3DSDJTSwAAAAQWaSwBcJMAezk30iMciuxfXeicR50ZkRJGMAti7CiZjA2%26")}
                        variant="contained"
                        color="secondary"
                        size="large"
                        className={classes.button}
                        startIcon={<FlightTakeoffIcon/>}
                    >
                        Join the live (password 0000)
                    </Button>

                </div>
            </div>

        </div>
    );
};

export default BannerLive;
