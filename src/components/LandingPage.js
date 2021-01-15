import React from 'react';
import Lottie from 'react-lottie';
import {makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonArrow from '../components/ui/ButtonArrow';
import Typography from '@material-ui/core/Typography';
import customSoftwareIcon from '../assets/Custom Software Icon.svg'



import animationData from '../animations/landinganimation/data'


const useStyles = makeStyles(theme => ({
    animation: {
        maxWidth: "50em",
        minWidth: "21em",
        marginTop: "2em",
        marginLeft: "10%",
        [theme.breakpoints.down("sm")]: {
            maxWidth: "30em"
        }

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
    },
   
    learnButtonHero: {
        ...theme.typography.learnButton,
        fontSize: "0.9rem",
        height: 45,
        weight: 145
        },



        marginContainer: {
            marginTop: "5em",
            [theme.breakpoints.down("md")]:{
                marginTop: "3em"
            },
            [theme.breakpoints.down("xs")]:{
                marginTop: "2em"
            }
        },
        heroTextContainer: {
            mainWidth: "21.5em",
            marginleft: "1em",
            [theme.breakpoints.down("xs")] : {
                marginLeft: 0
        }

        },
        
        specialText: {
            fontFamily: "Pacifico",
            color: theme.palette.common.orange
        }
    
    


}));

export default function LandingPage() {
    const classes = useStyles();
    const theme = useTheme();

    const defaultOptions= {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <Grid container direction="column" className={classes.mainContainer}>
            <Grid item> {/*-----Hero Block-----*/}
            <Grid container justify= "flex-end" alignItems="center" direction="row">
            <Grid sm item className={classes.heroTextContainer}>
                <Typography variant= "h2" align="center">
                    Bringing the West Coast Technology <br/>to the Midwest
                    </Typography>
                <Grid container 
                justify="center"
                className={classes.buttonContainer}>
                    <Grid item>
                    <Button className={classes.estimateButton}
                    variant = "contained">Free Estimate</Button>
</Grid>
<Grid item>


<Button variant = "outlined" className={classes.learnButtonHero}>
  
<ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />

</Button>

</Grid>
</Grid>
</Grid>
        <Grid sm item className= {classes.animation}>
    
    <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
</Grid>
</Grid>
</Grid>
<Grid item> {/*-----Services Block-----*/}
<Grid comtainer direction="row">
    <Grid item>
        <Typography variant="h4">
        Custom Software Development
        </Typography>
        <Typography variant="subtitle1">
        Save Energy. Save Time. Save Money.
        </Typography>
        <Typography variant="subtitle1">
       Complete digital solution, from investigation to {""}
       <span className={classes.specialText}>celebration</span>
        </Typography>
        <Button variant="outlined" className={classes.learnButton}>
        <span style={{ marginRight: 10}}>Learn More</span>
        <ButtonArrow 
        width={10} 
        height={10} 
        fill={theme.palette.common.blue}/>
        </Button>
    </Grid>
    <Grid item>
        <img alt="custom software icon" src= {customSoftwareIcon} />
    </Grid>
</Grid>

</Grid>
</Grid>

    );   
}
