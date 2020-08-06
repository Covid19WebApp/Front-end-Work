import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import GlobalPieChat from './GlobalPieChat';




  const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
      '& > *': {
        marginTop: theme.spacing(0),
        marginLeft: theme.spacing(0),
        width:'100%',
        height: theme.spacing(21),
        display: "flex",
        flexDirection: "column",
       justifyContent: "center"
      },
      
    },
  }));
  

export default function  Vantilator() {
  const classes = useStyles();
 

  return (
      
      <>
    <div className={classes.root}>
      <Paper elevation={2} style={{backgroundColor: 'rgba(500, 50, 75, 0.5)'}} >
      <Typography align='center' variant="h3"   >
         8000
     </Typography>
     <Typography align='center' variant="h6"  >
       Critical Condition
     </Typography>
      </Paper>
    </div>
    <GlobalPieChat/>
    </>
    
  );
}
