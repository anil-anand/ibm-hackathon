import React from "react";
import {Box,Grid,Select,MenuItem, Button, makeStyles} from '@material-ui/core'
const useStyles = makeStyles({
    wrapper:{
        backgroundColor:"#fff",
        display:"flex",
        boxShadow:"0px 1px 5px rgba(0,0,0.1)",
        borderRadius:"5px",
        "&>*":{
          flex: 1,
          height:"45px",
          margin:"8px"
        } ,
    },
});

export default props=>{
    const classes=useStyles()
  return   (
        <Box p={2} mt={-5} className={classes.wrapper}>

             <input type="text" placeholder="Search by keywords.." />
            <Button  variant="contained" color="#f2f2f2">Job Category
            <Select disableUnderline fullWidth>
            <MenuItem value="Web Develoment">Web Development</MenuItem>
            <MenuItem value="App Development">App Develoment</MenuItem>
            <MenuItem value="Data Entry">Data Entry</MenuItem>
            <MenuItem value="Arts">Arts</MenuItem>
            <MenuItem value="Sports">Sports</MenuItem>
            <MenuItem value="Mentor">Mentor</MenuItem>
            </Select>
            </Button>


            <Button  variant="contained" color="#f2f2f2">Job Type
            <Select disableUnderline fullWidth>
            <MenuItem value="Full time">Full time</MenuItem>
            <MenuItem value="part time">Part time</MenuItem>
            </Select>
            </Button>

             <Button  variant="contained" color="#f2f2f2" fullWidth>location
            <Select  disableUnderline fullWidth>
            <MenuItem value="Mumbai">Mumbai</MenuItem>
            <MenuItem value="Chennai">Chennai</MenuItem>
            <MenuItem value="cochin">cochin</MenuItem>
            <MenuItem value="Pune">Pune</MenuItem>
            <MenuItem value="Hyderabad">Hyderabad</MenuItem>
            <MenuItem value="Noida">Noida</MenuItem>
            </Select>
            </Button>

            <Button  variant="contained" color="#f2f2f2">Remote
            <Select  disableUnderline fullWidth>
            <MenuItem value="In-office">In-office</MenuItem>
            <MenuItem value="Remote">Remote</MenuItem>
            </Select>
            </Button>

            <Button  variant="contained" color="#f2f2f2">Education
            <Select  disableUnderline fullWidth >
            <MenuItem value="Btech">Btech</MenuItem>
            <MenuItem value="BCA">BCA</MenuItem>
            <MenuItem value="BCOM">BCOM</MenuItem>
            <MenuItem value="BBA">BBA</MenuItem>
            <MenuItem value="BSC">BSC</MenuItem>
            <MenuItem value="ITA">ITA</MenuItem>
            </Select>
            </Button>
             
            <Button  variant="contained" color="#f2f2f2">Duration
            <Select disableUnderline fullWidth>
            <MenuItem value="Full time">1 month</MenuItem>
            <MenuItem value="part time">2 month</MenuItem>

            </Select>
            </Button>
             
            <Button variant="contained" color="#f2f2f2">Keywords
            <Select  disableUnderline fullWidth>
            <MenuItem value="Html">Full time</MenuItem>
            <MenuItem value="CSS">Part time</MenuItem>
            <MenuItem value="JavaScript">BCOM</MenuItem>
            <MenuItem value="Music">BBA</MenuItem>
            <MenuItem value="Dance">BSC</MenuItem>
            <MenuItem value="Football">ITA</MenuItem>
            <MenuItem value="Tennis">BCOM</MenuItem>
            <MenuItem value="Java">BBA</MenuItem>
            <MenuItem value="flutter">BSC</MenuItem>
            <MenuItem value="Dart">ITA</MenuItem>
            </Select>
            </Button>


            <Button variant="contained" color="primary" disableElevation> Search</Button>

        </Box>
    )
}

