import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import footerAdornment from '../../assets/Footer Adornment.svg'

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: "100%",
        zIndex: 1302,
        position: "relative"
    },
    adornment: {
        width: "25em",
        verticalAlign: "bottom",
        [theme.breakpoints.down("md")]: {
            width: "21em"
        },
        [theme.breakpoints.down("xs")]: {
            width: "15em"
        }
    },
    mainContainer: {
        position: "absolute"
    },
    link: {
        color: "white",
        fontFamily: "Arial",
        fontSize: "0.75rem",
        fontWeight: "bold"
    }

}));

export default function Footer() {
    const classes = useStyles();
    
    return (
    <footer className={classes.footer}>
        <Grid container className= {classes.mainContainer}>
            <Grid item className={classes.link}>Home</Grid>
            </Grid>
        <img 
        alt="black decorative slash" 
        src={footerAdornment}
        className={classes.adornment}
        />
   </footer>
   );

}