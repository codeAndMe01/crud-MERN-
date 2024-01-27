import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"

const User = () => {
   const [users,setUser]  = useState([]);


   useEffect(()=>{
    axios.get('http://localhost:8080')
    .then(result => {
      //  console.log(result)
      setUser(result.data)
    })
    .catch(err => console.log(err));
   },['handleDelete']) 

    async function handleDelete(id){
      axios.delete(`http://localhost:8080/deleteUser/${id}`);
        
    }

  return (
    <div className=" bg-black rounded ">
      <div className="w-100 bg-warning rounded p-3">
       <Link to="/create" className="btn btn-dark mb-3">Add + </Link>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S.no</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Eamil</th>
              <th scope="col">Operations</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user,index)=>{
            return <tr key={index}>
                <td>{index+1}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td>
                  <Link to={`/update/${user._id}`} className="btn btn-info me-2">Update</Link>
                  <button className="btn btn-danger" onClick={(e) => (handleDelete(user._id))}>Delete</button> 
                </td>

              </tr>
            })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
