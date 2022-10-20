import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const Search = (props)=> {
    const [StudentID, setId] = useState(null);
    const [dob, setDate] = React.useState(dayjs('2022-04-07'));

    const submitHandler = (e) =>{
        e.preventDefault();        
      //  props.handelCourse(StudentID);
        props.search(StudentID, dob);
    }
    const handelChange = (e) =>{
        setId({StudentID: e.target.value});
    }
    
    return (        
        <div>
        
        <form>
          <fieldset>
            <label>
              <p>Enter Student 9 digit ID number</p>
              <input type="text" name="StudentID" onChange={handelChange} required></input>
            </label>
          </fieldset>
          <fieldset>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack spacing={3}>        
            <DatePicker
              disableFuture
              label="Student Date of Birth"
              openTo="year"
              views={['year', 'month', 'day']}
              value={dob}
              onChange={(newValue) => {
                setDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>
          </fieldset>
          
          
          <button type="submit" onClick={submitHandler}>Search</button>
        </form>
      </div>
    )
}

export default Search;