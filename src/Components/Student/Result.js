import React, { Component } from 'react';
import './style.css';

const Result = (props) =>{
   
    return(
        <div> 
            <h1>Search Result</h1>
            <ul>
                <li>Name: XYZ</li>
                <li>DOB: 1 October,2000</li>
                <li>CGPA: {props.result.cgpa}</li>
                <li>GPA: {props.result.grade}</li>
                <li>Passing Year: 2021</li>
            </ul>                     
        </div>
    )
};

export default Result;