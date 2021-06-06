import React, { useEffect, useState } from 'react';
import "./css/style.css";

const Datagrokr = () => {
    return(
        <>
            <div>
            <h1>Datagrokr</h1>
            <h4>Personal Detail</h4>
            <div className="parentdiv">
                <div className="inputData">
                    <label>First Name </label>
                    <input className="inputfield"
                     /></div>

                     <div className="inputData">
                    <label>Last Name </label>
                    <input className="inputfield"
                     /></div>
                    
                     <div className="inputData">
                    <label>Contact </label>
                    <input className="inputfield"
                     /></div>

                     <div className="inputData">
                    <label>Email id </label>
                    <input className="inputfield"
                     /> </div>
                     </div>

<h4>Account Detail</h4>
<div className="parentdiv">
                <div className="inputData">
                    <label>Account no </label>
                    <input className="inputfield"
                     /></div>

                     <div className="inputData">
                    <label>Bank Name </label>
                    <input className="inputfield"
                     /></div>
                     </div>

                     <div className="parentdiv">
            
                    <label>Storage Medium </label>
                    <select name="cars" id="cars">
    <option value="volvo">Cloud</option>
    <option value="saab">Local Storage</option>
   
  </select>
                    

                     </div>

                     <div className="parentdiv">
                    <button>submit</button> 
                    </div>
                     
                </div>
        
        </>
    )
}

export default Datagrokr;