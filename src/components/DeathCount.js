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

export default function DeathCount() {
  const classes = useStyles();

  return (
      <>
    <div className={classes.root}>
      <Paper elevation={2}  >
      <Typography align='center' variant="h3"   >
         6190
     </Typography>
     <Typography align='center' variant="h6"  >
         Official Deaths
     </Typography>
      </Paper>
      </div>
      <TotalCount/>
      </>
  );
}