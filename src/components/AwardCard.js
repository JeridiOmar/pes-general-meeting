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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deleniti, est exercitationem explicabo
                    illo impedit in magnam pariatur possimus quia reiciendis repellat rerum sequi vel, veniam. Corporis
                    dicta eligendi eos, fuga fugit id omnis optio quidem recusandae sint sit tenetur. Ad atque explicabo
                    maiores neque nihil officiis repudiandae tenetur voluptate!
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

                            <Button  className={classes.button}  m={2} variant="contained" color="primary">
                               <GetAppIcon className={classes.icon}/> Download challenge specifications
                            </Button>

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
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                        minutes.
                    </Typography>
                    <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                    </Typography>
                    <Typography paragraph>
                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                        again without stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don’t open.)
                    </Typography>
                    <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
};
export default AwardCard;
