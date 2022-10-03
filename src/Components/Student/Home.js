import React, { useState, useEffect } from 'react';

import Result from './Result';
import Search from './Search';
import { api_url } from './Api';
import './style.css';

const Home = () =>{
    const [ID, setId] = useState(null);
    const loadResult = (e) =>{               
        setId(e.StudentID);
       //console.log(ID);
      }
    
     // const course = [{c_modulecode:'', c_title:'', c_lettergrade:'', status:''}]
      const [results, setResult] = useState([]);
      
            
      useEffect(()=>{
          fetch(api_url)
          .then((res)=>{
             return res.json();
          })
          .then((data)=>{
              setResult(data);
              console.log(data);
          })
      }, []);
    
     const search = searchValue => {
     
      console.log(searchValue.StudentID);
      fetch(`http://ip/result/${searchValue.StudentID}`)
     //fetch(`http://ip/courseofferlist`)     
      .then((res)=>{
        return res.json();
     })
     .then((data)=>{
         setResult(data);
         console.log(data);
     });
        };
    return (
        <div className="wrapper">
            <h1>Search Form</h1>          
            <Search search={search} />                      
               {results.map((item, index)=>(
                   <Result key={index} result = {item} />                   
               ))}                     
        </div>
    )
}

export default Home;