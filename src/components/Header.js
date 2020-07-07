import React from 'react';
import {AppBar,Toolbar,Typography,Box} from '@material-ui/core';
import logo from '../images/COVID-19.png';
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles((theme) => ({
    root: {
        display:'flex',
        
      },
  title: {
    color:"#212529",
    fontFamily: " 'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontWeight:500,
    fontSize: "1rem",
    lineHeight: 1,
    letterSpacing: "-0.01562em",
    flexShrink:0,
    textAlign: 'center',
    paddingLeft:'5px'
},
  logo: {
    width: '60px',
    height: '52px',
    paddingTop:"3px",
    flexShrink:0,
    textAlign: 'center',
},
  AppBarColor:{
      backgroundColor:"#ffffff",
      position:"sticky",
      justifyContent: 'center',
      alignItems: 'center',
     
},
  
}));

export default function Header() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <AppBar className={classes.AppBarColor} elevation={1} >
        <Toolbar>
        <div>
        <img src={logo} className={classes.logo} alt="logo" />
        </div>
          <Typography variant="h6" className={classes.title}>
            CoronaMeter Germany
          </Typography>
          
         
       </Toolbar>
       </AppBar>
       
       </Box>
  );
}

  
  