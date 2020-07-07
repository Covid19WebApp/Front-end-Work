import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import CasesCount from './CasesCount';
import ActiveCount from './ActiveCount';
import SimpleTabs from './TabsMain';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor:"#E8E8E8",
      marginTop:'20px',
    },
    paper: {
      padding: theme.spacing(3),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height:'1000px',
      marginTop:'16px',
      
    },

    
    
}));

export default function BodyGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Grid container spacing={2}>
      <Grid item  xs={12} sm={3}>
        <CasesCount/>
        </Grid>
      
      <Grid item xs={12} sm={6}>
        <SimpleTabs/>
        
      </Grid>
      <Grid item xs={12} sm={3}>
        <ActiveCount/>
      </Grid>
    </Grid>
    
    
  </div>
   
      
  
  );
}