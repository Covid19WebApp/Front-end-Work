import React from 'react';
import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InsetList from './HeaderSupport';
import Header from './Header';
import BodyGrid from './BodyGrid';
import Bodyimage from './Bodyimage';
import BodyText from './BodyText';
import Footer from './footer';
import BodyText1 from './coronaViruSym';
import SymptopsCard from './SymptomsCards/SymptopCard';
import SymptopBreath from './SymptomsCards/SymptomsBreath';
import SymptopThroat from './SymptomsCards/SymptomsThroat';
import SymptopHead from './SymptomsCards/SymptomsCardHead';
import SymptopConfusion from './SymptomsCards/SymptomsConfusion';
import SymptopFever from './SymptomsCards/SymptomsFever';

import SymptomsHand from './SymptomsCardsPre/SymptomsHand'; 
import SymptopCardMask from './SymptomsCardsPre/SymptomsCardMask'; 
import BodyCardCough from './SymptomsCardsPre/SymptomsBody'; 
import BodyCardCoughConditioned from './SymptomsCardsPre/SymptopCardBreath'; 
import SymptopAvoid from './SymptomsCardsPre/SymptomsAvoid'; 
import SymptopAvoidAnimals from './SymptomsCardsPre/SymptomsAvoidAnimals'; 
import SymptopAvoidPlaces from './SymptomsCardsPre/SymptomsAvoidPlaces'; 
import SymptopCardContaminated  from './SymptomsCardsPre/SymptomsContaiminated'; 




const useStyles = makeStyles((theme) => ({
    root: {
     backgroundColor:"#E8E8E8",
     
    },
    

    
    
}));
export default function MainGrid() {
    const classes = useStyles();
    return (
        <>
        <Grid container direction='column' className={classes.root} >
        <Grid item xs={12}> 
        <Header/>
        </Grid>
        </Grid>
        <InsetList/>
        <BodyGrid/>
        <Grid container direction='column' className={classes.root}>
        <Grid item xs={12} md={12}> 
        <Bodyimage/>
        </Grid>
        </Grid>
        <Grid container  direction='column' className={classes.root} >
        <Grid item xs={12} md={12}> 
        <BodyText/>
        </Grid>
        </Grid>
        <Grid container  className={classes.root} >
        <Grid item sm={1}/>
        <Grid item xs={12} sm={5}> 
        <SymptopsCard/>
        <SymptopBreath/>
        <SymptopThroat/>
        </Grid>
        
        <Grid item xs={12} sm={5}> 
        <Grid item sm={1}/>
        <SymptopHead/>
        <SymptopConfusion/>
        <SymptopFever/>
        </Grid>
        </Grid>
        <Grid container  direction='column' className={classes.root} >
        <Grid item xs={12} md={12}> 
        <BodyText1 />
        </Grid>
        </Grid>
        <Grid container  className={classes.root} >
        <Grid item  sm={1}/>
        <Grid item xs={12} sm={5}> 
        <SymptomsHand/>  
        <SymptopCardMask/> 
        <BodyCardCough/> 
        <BodyCardCoughConditioned/>
        
        </Grid>
        <Grid item xs={12} sm={5}> 
       < SymptopAvoid /> 
        <SymptopAvoidAnimals />
         <SymptopAvoidPlaces />
          <SymptopCardContaminated/>
        
        </Grid>
        </Grid>
        <Grid container direction='column' className={classes.root}>
        <Grid item xs={12} md={12}> 
        <Footer/>
        </Grid>
        </Grid>
        
        </>
    )
}
