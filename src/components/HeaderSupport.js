import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Box,Grid} from '@material-ui/core';
import logo1 from '../images/Tab1.png';
import logo2 from '../images/Tab2.png';
import logo3 from '../images/Tab3.png';



const useStyles = makeStyles((theme) => ({
  
    textFont:{
    fontFamily: " 'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontWeight:420,
    fontSize: "1rem",
    letterSpacing: "-0.01562em",
     marginTop: "15px",
     marginLeft:"10px",
     textAlign:'center',
     
    },
    textFontDe:{
      fontFamily: " 'Roboto', 'Helvetica', 'Arial', sans-serif",
      fontWeight:420,
      fontSize: "1rem",
      letterSpacing: "-0.01562em",
       marginTop: "15px",
       marginRight:"12px",
       textAlign:'center',
       [theme.breakpoints.up('md')]: {
        marginLeft:"10px",
      },
       
      },
    logo:{
      height:'12px',
      width:'12px',
      marginRight:"10px",
      
    },
    logo1re:{
      height:'12px',
      width:'12px',
      marginRight:"11px",
      [theme.breakpoints.up('md')]: {
        marginRight:"10px",
      },
      
    },
    
}));

export default function InsetList() {
  const classes = useStyles();

  return (
      
    <Grid container  >
      <Grid item md={1}/>
    <Grid item xs={12} md={2} >
    
     <Box className={classes.textFont}>
      Last 24 hours:
      </Box>
      </Grid>
      <Grid item xs={6} md={2}   >
        
      <Box className={classes.textFont} >
      <img className={classes.logo1re} src={logo3} alt="404" />
          Infected: 1694    
      </Box>
      </Grid>
      <Grid item xs={6} md={2} >
     
      <Box className={classes.textFont}>
      <img className={classes.logo1re} src={logo2} alt="404" />
       Recovered: 588
      </Box>
      </Grid>
      <Grid item xs={6} md={2} >
      
      <Box className={classes.textFontDe}>
      <img className={classes.logo} src={logo3} alt="404" />
       Death: 2400
      </Box>
     </Grid>
      <Grid item xs={6} md={2}  >
      
      <Box className={classes.textFontDe}>
      <img className={classes.logo} src={logo1} alt="404" />
       Tests: 9780
      </Box>
      </Grid>
      <Grid item md={3}/>

</Grid>

   
      
  
  );
}