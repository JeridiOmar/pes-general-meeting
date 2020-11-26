import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';

import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import GetAppIcon from '@material-ui/icons/GetApp';
import Collapse from "@material-ui/core/Collapse";
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 750,
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
    button:{
        marginTop:20
    },
    icon:{
        margin:5
    }
}));

const AwardCard = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            {/*<CardHeader*/}
            {/*    avatar={*/}
            {/*        <Avatar aria-label="recipe" className={classes.avatar}>*/}
            {/*            R*/}
            {/*        </Avatar>*/}
            {/*    }*/}
            {/*    action={*/}
            {/*        <IconButton aria-label="settings">*/}
            {/*            <MoreVertIcon />*/}
            {/*        </IconButton>*/}
            {/*    }*/}
            {/*    title="Shrimp and Chorizo Paella"*/}
            {/*    subheader="September 14, 2016"*/}
            {/*/>*/}
            <CardMedia
                className={classes.media}
                image="https://scontent.ftun1-1.fna.fbcdn.net/v/t1.0-9/125891022_4674000399339249_520297018756263019_o.jpg?_nc_cat=104&ccb=2&_nc_sid=730e14&_nc_ohc=50v1u2_KpWIAX-Agtem&_nc_ht=scontent.ftun1-1.fna&oh=e9f804f03daeec2f5eccc783923e743c&oe=5FE0F17C"
                title="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                     More information about the competition will be divulgated soon
                    <Grid
                        container
                        spacing={2}
                        m={2}
                        direction="column"
                        alignItems="center"
                        justify="center"

                    >

                        <Grid item xs={12}
                              spacing={2}
                              m={2}>

                            <Button  className={classes.button}  m={2} variant="contained" color="primary" disabled>
                               <GetAppIcon className={classes.icon}/> Download challenge specifications
                            </Button><Typography>*available on 5 of december</Typography>

                        </Grid>
                    </Grid>

                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                {/*<IconButton aria-label="add to favorites">*/}
                {/*    <FavoriteIcon/>*/}
                {/*</IconButton>*/}
                {/*<IconButton aria-label="share">*/}
                {/*    <ShareIcon/>*/}
                {/*</IconButton>*/}
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
                    <Typography paragraph>Winners award in partnership with orange:</Typography>
                    <Typography paragraph>
                        1st place: soon
                    </Typography>
                    <Typography paragraph>
                        2nd place: soon
                    </Typography>
                    <Typography paragraph>
                        3rd places : soon
                    </Typography>

                </CardContent>
            </Collapse>
        </Card>
    );
};
export default AwardCard;
