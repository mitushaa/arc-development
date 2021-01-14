import React from 'react';
import Lottie from 'react-lottie';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonArrow from '../components/ui/ButtonArrow';
import Typography from '@material-ui/core/Typography'



import animationData from '../animations/landinganimation/data'


const useStyles = makeStyles(theme => ({
    animation: {
        maxWidth: "50em",
        minWidth: "21em",
        marginTop: "2em",
        marginLeft: "10%"

    },
    estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        height: 45,
        width: 145,
        marginRight: 40,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }

    },
    buttonContainer: {
        marginTop: "1rem"
    }

}));

export default function LandingPage() {
    const classes = useStyles();

    const defaultOptions= {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <Grid container direction="column">
            <Grid item>
            <Grid container justify= "flex-end" alignItems="center" direction="row">
            <Grid sm item>
                <Typography variant= "h2" align="center">
                    Bringing the West Coast Technology <br/>to the Midwest
                    </Typography>
                <Grid container justify="center"
                className={classes.buttonContainer}>
                    <Grid item>
                    <Button className={classes.estimateButton}
                    variant = "outlined">Free Estimate</Button>
</Grid>
<Grid item>


<Button variant = "outlined">Learn More
<ButtonArrow width={15} height={15} fill="red" />

</Button>

</Grid>
</Grid>
</Grid>
        <Grid sm item className= {classes.animation}>
    
    <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
</Grid>
</Grid>
</Grid>
</Grid>

    );   
}
