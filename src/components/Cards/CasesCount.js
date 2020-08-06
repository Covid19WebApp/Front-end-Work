import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Typography,Card} from '@material-ui/core';
import CuredCount from './CuredCount';


const useStyles = makeStyles((theme) => ({
  root: {
      display: 'flex',
      flexWrap: 'wrap',
    '& > *': {
      marginTop: theme.spacing(2),
      marginLeft: theme.spacing(1),
      width:'100%',
      height: theme.spacing(21),
      display: "flex",
     flexDirection: "column",
     justifyContent: "center",
     borderBottom: '10px solid rgba(127, 85,85, 0.5)'
    },
    
  },
}));

export default function CasesCount() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <Card elevation={2} style={{backgroundColor: 'rgba(249,161,111, 0.5)'}} >
      <Typography align='center' variant="h3"   >
         30205
     </Typography>
     <Typography align='center' variant="h6"  >
         Number of Cases
     </Typography>
      </Card>
      
      <CuredCount/>
    </div>
  );
}