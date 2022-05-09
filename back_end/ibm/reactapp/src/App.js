import React, { useState } from "react";
import { Box, Grid, ThemeProvider } from "@material-ui/core";
import theme from "./theme/theme";
import Header from "./components/Header/"
import Footer from "./components/Footer"
import SearchBar from "./components/SearchBar/";
import jobData from "./dummyData";
import JobCard from "./components/Job/JobCard";
import PostJob from "./PostJob";
import './PostJob.css';


export default () => {
const [log,setLog]=useState(true);
const [provider,setProvider]=useState(false);
const [seeker,setSeeker]=useState(false);

  return (
    <div>
    {log && <div>
      <button onClick={()=>{setProvider(true);setLog(false);}}>Job Provider</button>
      <button onClick={()=>{setSeeker(true);setLog(false);}}>Seeker</button>

    </div>}
    {
      provider && <PostJob/>
    }
    {seeker &&

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
}
  </div>

  );
};
