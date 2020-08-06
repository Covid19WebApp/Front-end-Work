import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
    root: {
      display:"flex",
      marginTop:"80px",
      justifyContent: 'center',
      alignItems:"center",
      width:"100%",
      fontWeight:"2000px",
      flexShrink:0,
      
      
    },
 
  
  
  
}));

export default function BodyText() {
  const classes = useStyles();

  return (
    <Typography className={classes.root}  variant="h3">
      CoronaVirus Symptoms
    </Typography>
  );
}