import React from "react";
import { Box, Grid, ThemeProvider } from "@material-ui/core";
import theme from "./theme/theme";
import Header from "./components/Header/"
import Footer from "./components/Footer"
import SearchBar from "./components/SearchBar/";
import jobData from "./dummyData";
import JobCard from "./components/Job/JobCard";


export default () => {
  return (
    


  <ThemeProvider theme={theme}>
            

          <Header/>
        
             
             <Grid container justify="center">
               <Grid item xs={10}>
                 
                     <SearchBar/>
                     {jobData.map(job=><JobCard key={job.id} {...job}/>)}
                     
               </Grid>
             </Grid>

             <Footer/>
             
  </ThemeProvider>
    
  );
};
