import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import DeathCount from './DeathCount';

const useStyles = makeStyles((theme) => ({
  root: {
      display: 'flex',
      flexWrap: 'wrap',
    '& > *': {
      width:'100%',
      height: theme.spacing(21),
      display: "flex",
      flexDirection: "column",
     justifyContent: "center",
    
    },
    
  },
}));

export default function CuredCount() {
  const classes = useStyles();

  return (
      <>
    <div className={classes.root}>
      <Paper elevation={2} style={{backgroundColor: 'rgba(133, 203,97, 0.5)'}}  >
      <Typography align='center' variant="h3"   >
         6190
     </Typography>
     <Typography align='center' variant="h6"  >
         Official Cured
     </Typography>
      </Paper>
    </div>
    <DeathCount/>
    </>
  );
}