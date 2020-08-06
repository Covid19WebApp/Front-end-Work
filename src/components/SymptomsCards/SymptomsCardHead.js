import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card,Box} from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import img from '../../images/03.jpg';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth:600,
    minHeight: '5vw',
    marginLeft:'10px',
    marginTop:'50px',
    
  },
  avatar: {
    height:'100px',
    width:"100%",
    paddingTop:'1px'
  },
  Text:{
    display:"flex",
    justifyContent:"center"
    
  }
}));


export default function SymptopCard () {
  const classes = useStyles();
  
  return (
    <Card className={classes.root} >
      <Typography  color="textSecondary" className={classes.Text} >
         Symptom may appear in 2-14 days</Typography>
      <CardHeader
        avatar={
          <Box  className={classes.avatar} >
            <img  src={img} alt="404"/>
          </Box>
        }
           title="Strong Headacke"
           
           />
        
        </Card>
  
  );
}