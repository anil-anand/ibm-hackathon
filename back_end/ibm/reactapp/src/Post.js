import React, { useState } from 'react'
import './Post.css'

function Post(props) {
  const setChange=()=>{
    props.func();
  }
    
  return (
    <div id="center">
      <h1>Need a work to be done?</h1>
      <br/>
      <button id='bt' onClick={setChange}>POST A JOB</button>
    </div>
  )
}

export default Post