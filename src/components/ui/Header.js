import React, {useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'



import logo from "../../assets/logo.svg"


function ElevationScroll(props) {
  const { children} = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3rem"
  },
  logo: {
    height: "8rem"
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  tabContainer:{
    marginLeft: 'auto'
  },
  logoContainer: {
    padding: 0
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px"
  },
  button: {
    ...theme.typography.estimate,
  borderRadius: "50px",
  marginLeft: "50px",
  marginRight: "25px"

}


}));
export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] =useState(null)
  const [open, setOpen] = useState(false)

  const handleChange = (e, value) => {
    setValue(value);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true)
  }
  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false)
  }
  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0)
    } else if (window.location.pathname === "/services" && value !== 
    1) {
      setValue(1) 
    } else if (window.location.pathname === "/revolution" && value 
    !== 2) {
      setValue(2)
    } else if (window.location.pathname === "/about" && value 
    !== 3) {
      setValue(3)
    } else if (window.location.pathname === "/contact" && value 
    !== 4) {
      setValue(4)
    } else if (window.location.pathname === "/estimate" && value 
    !== 5) {
      setValue(5)
    }


  }, [value]);


  return (
    <React.Fragment>
    <ElevationScroll>
    <AppBar position="fixed" color="primary">
    <Toolbar disableGutters>
      <Button component={Link} 
      to="/" 
      disableRipple
      onClick={() =>
      setValue(0)} className={classes.logoContainer}>
      <img alt="company logo" className= {classes.logo} 
      src={logo} />
      </Button>
      <Tabs 
      value={value} 
      onChange={handleChange}
      className ={classes.tabContainer}
      indicatorColor="primary"
      >
        <Tab 
        className={classes.tab} 
        component = {Link} 
        to="/"
        label="Home" 
        />
        <Tab 
        aria-owns={anchorEl ? "simple-menu": undefined}
        aria-haspopup={anchorEl ? "true": undefined}
        className={classes.tab} 
        component = {Link} 
        onMouseOver={event => handleClick(event)}
        to="/services" 
        label="Services" 
        />
        <Tab 
        className={classes.tab} 
        component = {Link} 
        to="/
        revolution" label="The Revolution" 
        />
        <Tab 
        className={classes.tab} 
        component = {Link} 
        to="/
        aboutus" label="About Us" 
        />
        <Tab 
        className={classes.tab} 
        component = {Link} 
        to="/
        contactus" label="Contact Us" 
        />
      </Tabs>
      <Button variant = "contained" 
      color="secondary"
      className={classes.button}
      >Free Estimate
      </Button>
      <Menu id="simple-menu" anchorEl={anchorEl} 
      open={open}
      onClose={handleClose}
      MenuListProps={{onMouseLeave: handleClose}}
      >
        <MenuItem onClick={handleClose}>Custom Software Developement</MenuItem>
        <MenuItem onClick={handleClose}>Mobile App Developement</MenuItem>
        <MenuItem onClick={handleClose}>Website Developement</MenuItem>      
      </Menu>
      </Toolbar>
    </AppBar>
    </ElevationScroll>
    <div classname={classes.toolbarMargin}/>
    </React.Fragment>

  );
}
