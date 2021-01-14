import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = "#0B72B9"
const arcOrange = "#FFBA60"

export default createMuiTheme({
    palette: {
        common: {
           blue: `${arcBlue}`,
           orange: `${arcOrange}`
        },
        primary: {
            main: `${arcBlue}`,
        },
        secondary: {
            main: `${arcOrange}`,
        }
    }, 
    typography: {
        tab: {
            fontFamily: "Raleway",
            textTransform: "none",
            fontWeight: 700,
            fontSize: "1rem",
},
    estimate: {
        fontFamily: "Pacifico",
  fontSize: "1rem",
  textTransform: "none",
  height: "45px",
  color: "white"
    },
    h2: {
        fontFamily: "Raleway",
        fontWeight: 700,
        fontSize: "2.5rem",
        color: `${arcBlue}`,
        lineHeight: 1.5
    }

 
    }

});
