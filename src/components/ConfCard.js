import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 520,
        [theme.breakpoints.down('sm')]: {
            maxWidth: 250,
        }
    },
    media: {
        height: 0,
        paddingBottom: '60.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

const ConfCard = ({name,intro,description,picture,conference,fb,li}) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const parag=description.split("*");
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {name.charAt(0)}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon/>
                    </IconButton>
                }
                title={name}
                subheader={conference}
            />
            <CardMedia
                className={classes.media}
                image={picture}
                title="imageConf"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {intro}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites"
                            onClick={() => window.open(fb)}
                >
                    <FacebookIcon/>
                </IconButton>
                <IconButton aria-label="share"
                            onClick={() => window.open(li)}
                >
                    <LinkedInIcon/>
                </IconButton>
                <IconButton

                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon/>
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    {parag.map((para)=><Typography paragraph> {para}</Typography>)}
                    {/*<Typography paragraph>Method:</Typography>*/}
                    {/*<Typography paragraph>*/}
                    {/*    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque doloremque earum eveniet ex*/}
                    {/*    fugit iste modi nostrum rerum tempora?*/}
                    {/*</Typography>*/}
                    {/*<Typography paragraph>*/}
                    {/*    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto culpa cum cumque*/}
                    {/*    dolor ducimus enim error eum expedita fugiat iure, nobis nostrum placeat quo sint, suscipit*/}
                    {/*    tenetur vitae voluptatibus. At, aut autem, consequuntur earum et id iste nobis officiis quod*/}
                    {/*    sed, ullam vitae voluptatem voluptatibus! Aliquid consectetur ducimus in iusto, officia*/}
                    {/*    perspiciatis quidem quisquam, reiciendis saepe sit temporibus voluptas?*/}
                    {/*</Typography>*/}
                    {/*<Typography paragraph>*/}
                    {/*    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, consequuntur debitis dolore*/}
                    {/*    laborum molestiae molestias non nostrum odio possimus ullam. Ad facere hic in itaque laboriosam*/}
                    {/*    minus molestias unde vero!*/}
                    {/*</Typography>*/}
                    {/*<Typography>*/}
                    {/*    Set aside off of the heat to let rest for 10 minutes, and then serve.*/}
                    {/*</Typography>*/}
                </CardContent>
            </Collapse>
        </Card>
    );
};
export default ConfCard;
