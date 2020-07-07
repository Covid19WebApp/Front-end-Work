import React from 'react';
import {Grid} from '@material-ui/core';
import InsetList from './HeaderSupport';
import Header from './Header';
import BodyGrid from './BodyGrid'


export default function MainGrid() {
    return (
        <>
        <Grid container direction='column' >
        <Grid item xs={12}> 
        <Header/>
        </Grid>
        </Grid>
        <InsetList/>
        <BodyGrid/>
        
        
       
        
      
        
    
        
        
      
        
        
        
            
        </>
    )
}
