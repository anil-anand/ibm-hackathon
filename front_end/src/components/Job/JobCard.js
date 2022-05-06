import React from "react";
import {Box,Grid,Typography,Button,makeStyles} from '@material-ui/core';
import theme from "../../theme/theme";
import { differenceInMinutes } from "date-fns";


const skills=["Javascript", "React.js", "Node.js"]

const useStyles = makeStyles(((theme)=>({


    wrapper:{
        border:" 2px solid #e8e8e8",
        backgroundColor:" white",
        cursor:"pointer",
        transition:'.3s',
        "&:hover":{
            boxShawdow:"0px 5px 25px rgba(0,0,0.1)",
            borderLeft:"6px solid #4D64E4",
        }
    },
    companyName: {
        backgroundColor: theme.palette.primary.main,
        display:"inline-block",
        fontSize:"13.5px",
        padding:theme.spacing(0.75),
        borderRadius:"5px",
        fontWeight:600,
        },
    skillchip:{
        margin:theme.spacing(0.5),
        padding: theme.spacing(0.75),
        fontSize:"14.5px",
        borderRadius:"5px",
        transition:".3s",
        fontWeight:600,
        backgroundColor:theme.palette.secondary.main,
        color:"#fff",
    }

})));

export default (props) => {
    const classes=useStyles();
    return (
        <Box mt={2} p={2} className={classes.wrapper}>
            <Grid container alignItems="center"  backgroundColor="white" >
                <Grid  items xs Color="white" >
                    <Typography variant="subtitle1">{props.title}</Typography>
                    <Typography className={classes.companyName} variant="subtitle1" >{props.companyName}</Typography>
                </Grid >
                <Grid  items container xs >
                    {props.skills.map(skill=>(
                               <Grid key={skill} className={classes.skillchip} item>
                                   {skill}</Grid>))}
                </Grid >
                <Grid item container direction="column" alignItems="flex-end" xs>
                <Grid  items  >
                    <Typography variant ="caption">

                {differenceInMinutes(Date.now(),props.postedOn)}| {props.type} | {props.location}
                    </Typography>
                </Grid>
                <Grid  items >
                    <Box mt={2}>
                        <Button variant="outlined">Check</Button>
                    </Box>
                </Grid>
               </Grid> 
            </Grid>
        </Box>

    )
}