import React, { useEffect, useState } from 'react'
import './PostJob.css';
import Axios from 'axios';
import Post from './Post';

function PostJob() {
  const [jobDetails,setJobDetails]=useState({
    company:"",
    title:"",
    category:"",
    date:new Date(),
    type:"Remote",
    qualification:"",
    year:0,
    duration:0,
    location:"",
    stipend:0,
    requirement:[],
    desc:"",

  });

  const [check,setCheck]=useState(false);

  const handleChange = (e) =>{
    e.persist();
    if(e.target.name==="requirement"){
      let val=e.target.value;
      const arr=val.split(",");
      console.log(arr);
      setJobDetails((oldState) => ({...oldState, [e.target.name]: [arr],}));
    }

    else{
    setJobDetails((oldState) => ({...oldState, [e.target.name]: e.target.value,}));
    }





  };

  useEffect(()=>{
    console.log(jobDetails);
  },[jobDetails]);

  const submitFunc=(e)=>{

    console.log(jobDetails);
    e.preventDefault();
    Axios.post("https://6273eb0d345e1821b2243338.mockapi.io/jobSite",{
      company:jobDetails.company,
      title:jobDetails.title,
      category:jobDetails.category,
      date:jobDetails.date,
      type:jobDetails.type,
      qualification:jobDetails.qualification,
      year:jobDetails.year,
      duration:jobDetails.duration,
      location:jobDetails.location,
      stipend:jobDetails.stipend,
      requirement:jobDetails.requirement,
      desc:jobDetails.desc
    })
    .then(res=>{
      console.log(res.data);
      alert("Job Posted Successfully.");
      func();
    }
    )
    .catch(res=>{
      alert("Error while posting data.Try Again!!!");
    })

  }
  const func=()=>{
    setCheck(!check);
  }

  return (
    <div className="form">
    {!check && <Post func={func} />}
    {check &&
    <div className='jobPost'>
        <div className='heading'>POST A JOB
        <button onClick={func}>Back</button>
        </div>

    <form id="job_form" action="" onSubmit={submitFunc}><br/>
        <div className='post-data'>
        <div className="input-Box">
          <label className='details' >Company</label><input type="text" id="company" name="company"  onChange={handleChange} placeholder="Enter Company Name" required/><br/>

        </div>
        <div className="input-Box">
          <label className='details'>Job Title</label><input type="text" id="title" name="jobtitle"  onChange={handleChange} placeholder="Enter Job Title" required/><br/>
        </div>
        <div className="input-Box">
          <label className='details'>Category</label><input type="text" id="category" name="category"  onChange={handleChange} placeholder="Enter Job Category" required/><br/>
        </div>



        <div className="input-Box">
          <label className='details'>Posted Date</label><input type="date" id="date" name="date"  onChange={handleChange} placeholder="Date"/><br/>
        </div>
        <div className="input-Box">
          <label className='details'>Job Type</label>

          <select id="type" name="type"  onChange={handleChange} required>
            <option value="Remote">Remote</option>
            <option value="Onsite">Onsite</option>
          </select><br/>
        </div>



        <div className="input-Box">
        <label className='details' >Educational Qualification</label><input type="text" id="qualification" name="qualification"  onChange={handleChange} placeholder="Educational qualificaion" required/><br/>
        </div>
        <div className="input-Box">
        <label className='details'>Year of Study</label><input type="number" id="year" name="min_year"  onChange={handleChange} placeholder="Year of Study" required/><br/>
        </div>


        <div className="input-Box">
          <label className='details'>Duration in Months</label><input type="number" id="duration" name="duration"  onChange={handleChange} placeholder="Enter Job duration"/><br/>

        </div>


          <div className="input-Box">
          <label className='details'>Location</label><input type="text" id="location" name="location"  onChange={handleChange} placeholder="Enter location" required/><br/>
          </div>
          <div className="input-Box">
            <label className='details'>Stipend (Rs :)</label><input type="number" id="stipend" name="stipend"  onChange={handleChange} placeholder="Enter Stipend in Rs:" required/>
          </div>


        </div>
        <div className="input-Box">
        <label className='details'>Skill Requirements</label><input type="text" id="requirements" name="requirement" size="100" onChange={handleChange} placeholder="Enter Job Requirements" multiple required/><br/>
        </div>


        <div className="input-Box">
          <label className='details'>Job Description</label><input type="text" id="desc" name="description"  onChange={handleChange} size="100" placeholder="Enter Job Description" required /><br/>

        </div>


        <input id="submit" type="submit" value="Submit"/>


    </form>


    </div>
}
    </div>
  )
}

export default PostJob
