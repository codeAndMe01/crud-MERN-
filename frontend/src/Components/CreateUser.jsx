import React, { useState } from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom"

const CreateUser = () => {
   const [name,setName]  = useState();
   const [email,setEmail]  = useState();
   const [age,setAge]  = useState();
    
   const navigate = useNavigate();
    


   async function submit(e){
    e.preventDefault();

    try {
      const result = await axios.post("http://localhost:8080/createUser",{name,email,age})
      navigate('/')
    } catch (error) {
      console.log("this is ",error) 
      
    }

   }

  return (
    <div className="bg-black rounded">
      <div className="w-100 bg-warning rounded p-3">
        <form onSubmit={submit}>
        <h6 className=" display-4 d-flex float-left mb-3 ">Create User Form</h6>
          <div className="mb-3">
            <label htmlFor="name" className="float-left form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              aria-describedby="emailHelp"
              onChange={(e)=> setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Email
            </label>
            <input type="eamil" className="form-control" id="email" onChange={(e)=> setEmail(e.target.value)} />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input type="number" className="form-control" name="age" id="age" onChange={(e)=> setAge(e.target.value)} />
          </div>

          <button  type="submit" className="btn btn-dark">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
