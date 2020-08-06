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
      height:80,
      fontWeight:"200px",
      flexShrink:0,
      backgroundColor:"#151515",
      color:"white"
      },
 
  
  
  
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Typography className={classes.root}  variant="h6">
      © 2020 All Rights Reserved. Designed by M.Aqib. "Green Team"
    </Typography>
  );
}