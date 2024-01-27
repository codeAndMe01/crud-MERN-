import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  // console.log(name,email,age)

  useEffect(() => {
    axios
      .get(`http://localhost:8080/getUser/${id}`)
      .then((result) => {
        // console.log(result)

        setName(result.data.name);
        setEmail(result.data.email);
        setAge(result.data.age);
      })
      .catch((e) => console.log("database error", e));
  }, [id]);


  async function update(e){
    e.preventDefault();

   

    try {
      const result = await axios.put(`http://localhost:8080/updateUser/${id}`,{name,email,age})
      console.log("result",result)
      navigate('/')
    } catch (error) {
      console.log("Unabel to update",error) 
      
    }

   }


  return (
    <div className="bg-black rounded">
      <div className="w-100 bg-warning rounded p-3">
        <form onSubmit={update}>
          <h4 className=" display-3 d-flex float-left mb-3 ">Update Form</h4>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              aria-describedby="emailHelp"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              type="number"
              className="form-control"
              name="age"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
 
          <button type="submit"  className="btn btn-dark">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
