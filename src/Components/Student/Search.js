import { useState } from "react";

const Search = (props)=> {
    const [StudentID, setId] = useState(null);

    const submitHandler = (e) =>{
        e.preventDefault();        
      //  props.handelCourse(StudentID);
        props.search(StudentID);
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
          <button type="submit" onClick={submitHandler}>Search</button>
        </form>
      </div>
    )
}

export default Search;