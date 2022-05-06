import React from "react";
import {Box,Grid,Select,MenuItem, Button, makeStyles,TextField} from '@material-ui/core'
const useStyles = makeStyles({
    wrapper:{
        backgroundColor:"#fff",
        display:"flex",
        flexWrap:'wrap',
        boxShadow:"0px 1px 5px rgba(0,0,0.1)",
        borderRadius:"5px",
        "&>*":{
          flex: 4,
          height:"45px",
          margin:"8px"
        } ,
    },
});

export default props=>{
    const classes=useStyles()
  return   (
        <Box p={2} mt={-5} className={classes.wrapper}>
<TextField id="filled-basic" color="warning"  label="Keywords" variant="filled" />
            

            
            

            
            <Select variant="filled" disableUnderline fullWidth defaultValue="Remote" backgroundColor="gray">
            <MenuItem value="In-office">In-office</MenuItem>
            <MenuItem value="Remote">Remote</MenuItem>
            </Select>
            


             
            
            <Select variant="filled" disableUnderline fullWidth defaultValue="Duration">
            <MenuItem value="Duration">1 week</MenuItem>
            <MenuItem value="Full time">1 month</MenuItem>
            <MenuItem value="part time">2 month</MenuItem>

            </Select>
            
             
            


            <Button variant="contained" color="primary" disableElevation> Search</Button>

        </Box>
    )
}

