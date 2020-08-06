
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography,Divider } from '@material-ui/core';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';




const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 20,
    minHeight: '25vw',
    },
    Typo:{
      color:"#212529",
      fontFamily: " 'Roboto', 'Helvetica', 'Arial', sans-serif",
      fontWeight:200,
      fontSize: "1rem",
      paddingLeft:30,
      paddingTop:10,
      paddingBottom:10,
      opacity:'0.9'
    },
    services:{
      fontFamily: " 'Roboto', 'Helvetica', 'Arial', sans-serif",
      fontWeight:1000,
      fontSize: "1rem",
      paddingLeft:20,
      paddingTop:30,
     
      
    },
    avatercs:{
       paddingLeft:15,
       paddingTop:15,
       color:"green",
       height:'15px',
       
       
    }
  
}));

export default function DeathCount() {
  const classes = useStyles();

  return (
      <>
    <div className={classes.root}>
      <Paper className={classes.root} elevation={2}>
      <Typography  className={classes.Typo} >
         Emergency Helpline
     </Typography>
     <Divider/>
     <Typography className={classes.services}  variant="h6"  >
     Medical Assistance 
  <AddIcCallIcon className={classes.avatercs} />
      112
     </Typography>
     
     <Typography className={classes.services}  variant="h6"  >
       Police 
       <AddIcCallIcon className={classes.avatercs}/>
       110
     </Typography>
     <Typography className={classes.services} variant="h6"  >
     National telephone number 
       <AddIcCallIcon className={classes.avatercs} />
       118 33 (fee required)
     </Typography>
      </Paper>
      </div>
     
      </>
  );
}
