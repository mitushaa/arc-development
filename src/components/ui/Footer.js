import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palatte.common.blue,
        width: "100%"
    }
}));
export default function Footer() {
    const classes = useStyles();
    
    return <footer className={classes.footer}>Example Footer</footer>;

}