// import React from 'react';
// import Modal from "react-bootstrap/Modal";
//
// import {css} from '@emotion/react'
// /** @jsxImportSource @emotion/react */
// const TeaserModel = (props) => {
//     const modalStyle=css`
// & {
//       width: 75%;
//   height: calc((70vw * 9) / 16)
// }
// @media(max-width: 768px){
//   &{
//     width: 92%;
//     height: calc((92vw * 9) / 16);
//   }
// }
//
// `;
//     return (
//         <Modal css={modalStyle}
//             {...props}
//             // size="lg"
//             aria-labelledby="contained-modal-title-vcenter"
//             centered
//         >
//             {/*<Modal.Header closeButton>*/}
//             {/*    <Modal.Title id="contained-modal-title-vcenter">*/}
//             {/*        Modal heading*/}
//             {/*    </Modal.Title>*/}
//             {/*</Modal.Header>*/}
//             <Modal.Body style={{width:"100%",height:"100%"}}>
//                 <div style={{width:"100%",height:"100%"}}>
//                     <iframe style={{width:"100%",height:"100%"}}  src="https://www.youtube.com/embed/MGzmtWi4Oq0"
//                             frameBorder="0"
//                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                             allowFullScreen></iframe>
//                 </div>
//
//             </Modal.Body>
//             {/*<Modal.Footer>*/}
//             {/*    <Button onClick={props.onHide}>Close</Button>*/}
//             {/*</Modal.Footer>*/}
//         </Modal>
//     );
// };
//
// export default TeaserModel;
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';



function getModalStyle() {

    return {
        top: `50}%`,
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

export default function TeaserModel() {
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

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <iframe style={{width: "100%", height: "100%"}} src="https://www.youtube.com/embed/MGzmtWi4Oq0"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>

        </div>
    );

    return (
        <div>
            <button type="button" onClick={handleOpen}>
                Open Modal
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}
