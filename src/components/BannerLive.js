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
                        variant="contained"
                        color="secondary"
                        size="large"
                        className={classes.button}
                        startIcon={<FlightTakeoffIcon/>}
                    >
                        Join the live
                    </Button>

                </div>
            </div>

        </div>
    );
};

export default BannerLive;
