import React from 'react';
import img from '../images/image.png';
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles((theme) => ({
    root: {
      display:"flex",
      marginTop:"30px",
      justifyContent: 'center',
      alignItems:"center",
      flexShrink:0,
      width:'100%'
      
    },
 
  logo: {
    paddingTop:"3px",
    flexShrink:0,
    textAlign: 'center',
  },
  
  
}));

export default function Bodyimage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <img src={img} className={classes.logo} alt="lmage" />
    </div>
  );
}