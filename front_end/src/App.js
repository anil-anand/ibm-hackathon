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
import {Card} from '@mui/material';
import {CardActions} from '@mui/material';
import { CardContent } from '@mui/material';
import {CardMedia} from '@mui/material';
import {Button} from '@mui/material';
import {Typography} from '@mui/material';
import { height, width } from "@mui/system";

export default () => {
const [log,setLog]=useState(true);
const [provider,setProvider]=useState(false);
const [seeker,setSeeker]=useState(false);

  return (
    <div>
    {log && <div>
      <Box alignItems="center" justify-content= "space-between" display="flex"  flexDirection="row" marginTop="250px"  >
      <Card sx={{ minWidth: 500,minheight: 500, marginLeft :50}}>
      <CardMedia
        component="img"
        height="140"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4a1Mb3CSFYa0m_LLOULBucCkLNqOsOYRiLg&usqp=CAU"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Job Seeker
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
      <CardActions>
      <Button onClick={()=>{setSeeker(true);setLog(false);}}>Seeker</Button>
       
      </CardActions>
    </Card>


    <Card sx={{ minWidth: 500  ,marginLeft :10}}>
   
      <CardMedia
        component="img"
        height="140"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0DmfD6JAJH-TfairJ9r92XTXgS94LiShdA&usqp=CAU"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Job Provider
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
      <CardActions>
      <Button onClick={()=>{setProvider(true);setLog(false);}}>Job Provider</Button>
        
        
      </CardActions>
    </Card>
</Box>

      {/* <button onClick={()=>{setProvider(true);setLog(false);}}>Job Provider</button>
      <button onClick={()=>{setSeeker(true);setLog(false);}}>Seeker</button> */}
      
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
