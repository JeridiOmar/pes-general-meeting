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
        maxWidth: 420,
        [theme.breakpoints.down('sm')]: {
            maxWidth: 250,
        }
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
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

const ConfCard = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        M
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon/>
                    </IconButton>
                }
                title="Mkawar mahdi"
                subheader="Project management workshop"
            />
            <CardMedia
                className={classes.media}
                image="https://media-exp1.licdn.com/dms/image/C4D03AQHyrKgjL5dO9A/profile-displayphoto-shrink_800_800/0?e=1611187200&v=beta&t=qPxAYRhx3wXu7uZoZMMMHpx6k789iTnDbXQWWWEfaws"
                title="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda atque eaque enim, et
                    perferendis quia! A architecto deserunt eveniet incidunt sapiente sint tempora voluptates!
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FacebookIcon/>
                </IconButton>
                <IconButton aria-label="share">
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
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque doloremque earum eveniet ex
                        fugit iste modi nostrum rerum tempora?
                    </Typography>
                    <Typography paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto culpa cum cumque
                        dolor ducimus enim error eum expedita fugiat iure, nobis nostrum placeat quo sint, suscipit
                        tenetur vitae voluptatibus. At, aut autem, consequuntur earum et id iste nobis officiis quod
                        sed, ullam vitae voluptatem voluptatibus! Aliquid consectetur ducimus in iusto, officia
                        perspiciatis quidem quisquam, reiciendis saepe sit temporibus voluptas?
                    </Typography>
                    <Typography paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, consequuntur debitis dolore
                        laborum molestiae molestias non nostrum odio possimus ullam. Ad facere hic in itaque laboriosam
                        minus molestias unde vero!
                    </Typography>
                    {/*<Typography>*/}
                    {/*    Set aside off of the heat to let rest for 10 minutes, and then serve.*/}
                    {/*</Typography>*/}
                </CardContent>
            </Collapse>
        </Card>
    );
};
export default ConfCard;
