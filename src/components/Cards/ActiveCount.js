import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import TotalCount from './TotalTests';



const useStyles = makeStyles((theme) => ({
  root: {
      display: 'flex',
      flexWrap: 'wrap',
    '& > *': {
      marginTop: theme.spacing(2),
      marginRight: theme.spacing(1),
      width:'100%',
      height: theme.spacing(21),
      display: "flex",
      flexDirection: "column",
     justifyContent: "center",
     borderBottom: '10px solid rgba(127, 85,85, 0.5)'
    },
    
  },
}));

export default function ActiveCount() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={2} style={{backgroundColor: 'rgba(126,118,249, 0.5)'}} >
      <Typography align='center' variant="h3"   >
         6190
     </Typography>
     <Typography align='center' variant="h6"  >
         Active Cases
     </Typography>
      </Paper>
      <TotalCount/>
      
    </div>
    
  );
  
}