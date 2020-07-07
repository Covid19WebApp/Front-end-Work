import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Box,Grid} from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  
    textFont:{
    fontFamily: " 'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontWeight:420,
    fontSize: "1rem",
    letterSpacing: "-0.01562em",
     marginTop: "15px",
     textAlign:'center',
    
   

    
    }
}));

export default function InsetList() {
  const classes = useStyles();

  return (
      
    <Grid container  >
      <Grid item md={3}/>
    <Grid item xs={12} md={2} >
    
     <Box className={classes.textFont}>
      Last 24 hours:
      </Box>
      </Grid>
      <Grid item xs={6} md={1}   >
      <Box className={classes.textFont} >
          Infected: 1694    
      </Box>
      </Grid>
      <Grid item xs={6} md={1} >
      <Box className={classes.textFont}>
       Recovred: 588
      </Box>
      </Grid>
      <Grid item xs={6} md={1} >
      <Box className={classes.textFont}>
       Death: 24
      </Box>
     </Grid>
      <Grid item xs={6} md={1}  >
      <Box className={classes.textFont}>
       Tests: 9780
      </Box>
      </Grid>
      <Grid item md={3}/>

</Grid>

   
      
  
  );
}