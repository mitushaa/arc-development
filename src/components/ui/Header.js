import React, {useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';





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
    marginBottom: "3rem",
    [theme.breakpoints.down("md")]:{
      marginBottom: "2em"
    },
    [theme.breakpoints.down("xs")]:{
      marginBottom: "1.25em"
    }
  },
  
  logo: {
    height: "8rem",
    [theme.breakpoints.down("md")]:{
      height: "7em"
    },
    [theme.breakpoints.down("xs")]:{
      height: "5.5em"
    }
  },

  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  
  tabContainer: {
    marginLeft: 'auto'
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
  marginRight: "25px",
  height: "45px"
 },

menu: {
  backgroundColor: theme.palette.common.blue,
  color: "white",
  borderRadius: "0px"
},
menuItem: {
  ...theme.typography.tab,
  opacity: 0.7,
  "&:hover": {
    opacity: 1
  }
},
drawerIcon: {
  height: "50px",
  weight: "50px"
},
drawerIconContainer: {
  marginLeft: "auto",
  "&:hover": {
    backgroundColor: "transparent"
  }
},
drawer: {
  backgroundColor: theme.palette.common.blue
},
drawerItem: {
  ...theme.typography.tab,
  color: "white",
  opacity: 0.7
},
drawerItemEstimate: {
  backgroundColor: theme.palette.common.orange
},
drawerItemSelected: {
  opacity: 1
}
}));
export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/
  .test(navigator.userAgent);
  const matches =useMediaQuery(theme.breakpoints.down("md"))

  const [openDrawer, setOpenDrawer] = useState(false)
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] =useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);

  };

  const handleMenuItemClick = (e, i)=> {
    setAnchorEl(null);
    setOpenMenu(false)
    setSelectedIndex(i)

  }
  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false)
  };

// eslint-disable-next-line react-hooks/exhaustive-deps
const menuOptions = [
  { name: "Services", link: "/services", activeIndex: 1, ariaOwns: anchorEl ? "simple-menu": undefined, 
  ariaPopup: anchorEl ? "true": undefined, mouseOver: event => handleClick(event)}, 
  { name: "Customer Software Development", link: "/customsoftware", activeIndex: 1, selectedIndex: 1}, 
  { name: "Mobile App Development", link: "/mobileapps", activeIndex: 1, selectedIndex: 2}, 
  { name: "Website Development", link: "/websites", activeIndex: 1, selectedIndex: 3}
];

// eslint-disable-next-line react-hooks/exhaustive-deps
const routes = [
    { name: "Home", link: "/", activeIndex: 0},
    { name: "Services", link: "/services", activeIndex: 1},
    { name: "The Revolution", link: "/revolution", activeIndex: 2},
    { name: "About Us", link: "/about", activeIndex: 3},
    { name: "Contact Us", link: "/contact", activeIndex: 4}]

  useEffect(() => {
    [...menuOptions, ...routes].forEach(route => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex)
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
            setSelectedIndex(route.selectedIndex)
          }
      }
      break;
      default:
      break;
    }
  })

  }, [value, menuOptions, selectedIndex, routes]);

  const tabs = (
    <React.Fragment>
      <Tabs 
      value={value} 
      onChange={handleChange}
      className ={classes.tabContainer}
      indicatorColor="primary"
      >

      {routes.map((route, index) => (
        <Tab className={classes.tab} 
        component={Link} 
        to= {route.link} label={route.name}
        aria-owns={route.ariaOwns} 
        aria-haspopup={route.ariaPopup} 
        onMouseOver={route.mouseOver} />
      ))}  
      
      </Tabs>
        
      <Button variant = "contained" 
      color="secondary"
      className={classes.button}
      >Free Estimate
      </Button>
      
      <Menu 
      id="simple-menu" 
      anchorEl={anchorEl} 
      open={openMenu}
      onClose={handleClose}
      classes={{paper: classes.menu}}
      MenuListProps={{onMouseLeave: handleClose}}
      elevation={0}
      >
      {menuOptions.map((option, i) => (
<MenuItem key= {option}component = {Link} to ={option.link}
classes={{root: classes.menuItem}} onClick={(event) =>
  {handleMenuItemClick(event, i); setValue(1);
    handleClose()}} 
  selected={i === selectedIndex && value === 1}>{option.name}</MenuItem>
      ))} 
      </Menu>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer disableBackdropTransition={!iOS} 
      disableDiscovery={iOS} 
      open={openDrawer} 
      onClose={() =>setOpenDrawer(false)} 
      onOpen={() => setOpenDrawer(true)}
      classes={{paper: classes.drawer}}
      >
<List disablePadding>
  {routes.map(route => (
<ListItem divider button component= {Link} to ={route.link} selected={value===route.active} onClick={() =>{setOpenDrawer(false); setValue(route.activeIndex)}}>
  <ListItemText className={value === route.activeIndex ? [classes.drawerItem, classes.drawerItemSelected]: classes.drawerItem}
   disableTypography>{route.name}
  </ListItemText>
</ListItem>
  
  ))}
  <ListItem 
  onClick={() => {setOpenDrawer(false); 
  setValue(0)
}} 
  divider 
  button 
  component={Link} 
  to="/"
  selected={value === 0}
  >

  <ListItemText className= {
    value === 0 ?
  [classes.drawerItem, classes.drawerItemSelected] 
  :classes.drawerItem}
  disableTypography
  >
    Home</ListItemText>
  </ListItem>
  <ListItem onClick={() => {setOpenDrawer(false); setValue(1)}} 
  divider button component={Link} to="/services"
    selected={value === 1}
    >
    <ListItemText className= {value === 1 ?
  [classes.drawerItem, classes.drawerItemSelected] :
  classes.drawerItem}
    disableTypography>Services</ListItemText>
  </ListItem>
  <ListItem onClick={() => {setOpenDrawer(false); setValue(2)}} 
  divider button component={Link} to="/revolution"
    selected={value === 2}
    >
    <ListItemText className= {value === 2 ?
  [classes.drawerItem, classes.drawerItemSelected] :
  classes.drawerItem}
    disableTypography>The Revolution</ListItemText>
  </ListItem>
  <ListItem onClick={() => {setOpenDrawer(false); setValue(3)}} 
  divider button component={Link} to="/about"
    selected={value === 3}
    >
    <ListItemText className=  {value === 3 ?
  [classes.drawerItem, classes.drawerItemSelected] :
  classes.drawerItem}
    disableTypography>About Us</ListItemText>
  </ListItem>
  <ListItem onClick={() => {setOpenDrawer(false); setValue(4)}}  
  divider button component={Link} to="/contact"
    selected={value === 4}
    >
    <ListItemText className= {value === 4 ?
  [classes.drawerItem, classes.drawerItemSelected] :
  classes.drawerItem}
    disableTypography>Contact Us</ListItemText>
  </ListItem>
  <ListItem onClick={() => {setOpenDrawer(false); setValue(5)}} 
  divider button 
  component={Link} 
  className={classes.drawerItemEstimate} 

  to="/estimate"
  selected={value === 5}

  >
    <ListItemText className= {value === 5 ?
  [classes.drawerItem, classes.drawerItemSelected] :
  classes.drawerItem}
    disableTypography>Free Estimate
    </ListItemText>
  </ListItem>

</List>
</SwipeableDrawer>
<IconButton
className={classes.drawerIconContainer} 
onClick={() => setOpenDrawer(!openDrawer)}
disableRipple>
  <MenuIcon className={classes.drawerIcon} />
</IconButton>
    </React.Fragment>
  )


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
      {matches ? drawer: tabs}

      </Toolbar>
    </AppBar>
    </ElevationScroll>
    <div classname={classes.toolbarMargin}/>
    </React.Fragment>

  );
}
