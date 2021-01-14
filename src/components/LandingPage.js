import React from 'react';
import Lottie from 'react-lottie';
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'


import animationData from '../animations/landinganimation/data'


const useStyles = makeStyles(theme => ({

}))

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
            <Grid container direction="row">
            <Grid item>
                <div>Bringing the West Coast Technology<br/>to the Midwest</div>
                <Grid container>
                    <Grid item>
                    <Button variant = "outlined">Free Estimate</Button>
</Grid>
<Grid item>


<Button variant = "outlined">Learn More</Button>

</Grid>
</Grid>
</Grid>
        <Grid item>
    
    <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
</Grid>
</Grid>
</Grid>
</Grid>

    );   
}
