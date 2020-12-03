import React from 'react';
import Jump from "react-reveal/Jump";
import Fade from "react-reveal/Fade";
import CountDown from "./CountDown";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import VideocamIcon from "@material-ui/icons/Videocam";
import GroupWorkIcon from "@material-ui/icons/GroupWork";
import Modal from "@material-ui/core/Modal";
import {makeStyles} from "@material-ui/core/styles";

const Banner = () => {
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
    return (
        <div className="row">
            <div className="col-12 text-center">
                <Jump forever duration={1500}>
                    <h1 id={"banner-title"}>PES Tunisia General Meeting</h1>
                </Jump>
                <Fade bottom delay={1500}>
                    <h3>Various conferences, workshops and training sessions</h3>
                </Fade>
                <Fade bottom delay={1500}>
                    <CountDown timeTillDate="12 05 2020, 2:00 pm" timeFormat="MM DD YYYY, h:mm a"/>
                </Fade>
                <div onClick={() => setOpen(true)}><span className={"icon"}><i
                    className="fab fa-youtube"></i></span></div>
                {/*<h5>Event teaser</h5>*/}
                <ButtonGroup variant="contained" color="primary"
                             aria-label="large contained primary button group">
                    <Button
                        onClick={() => window.open("https://hedisinda5.typeform.com/to/zSRMSvKb?fbclid=IwAR3egg_s3oXuMUhuMkzlLq04FfJNYytBtfdPbsbKyf27qtI42k8KP0W1SMU")}><VideocamIcon/> Join
                        as a participant</Button>
                    <Button
                        onClick={() => window.open("https://ayediimen76.typeform.com/to/K0mkvBC5")}><GroupWorkIcon/> Join
                        the competition</Button>

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
    );
};

export default Banner;
