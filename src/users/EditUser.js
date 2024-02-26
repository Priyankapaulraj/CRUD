import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  let navigate =useNavigate();

  const {id}=useParams();

  useEffect(()=>{
    loadUser();
  },[])

  const [user, setUser] = useState({
    Id:"",
    customerName: "",
    phoneNumber: "",
    email: "",
    customerPwd:"",
    customerAddress:""
  });

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
 
  const onSubmit= async(e)=>{
    
    e.preventDefault();
     await axios.put("https://localhost:7157/api/Customer/Update",user);
    navigate("/");
    
  }

  const loadUser = async()=>{
    const result =await axios.get(`https://localhost:7157/api/Customer/GetById?Id=${id}`);
    setUser(result.data);
    
  }

  const {customerName,customerPwd,customerAddress, phoneNumber, email } = user;
  
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2>Update User</h2>
          <form onSubmit={(e)=> onSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              ID
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter User Name"
              name="Id"
              value={id}
              onChange={(e) => onInputChange(e)}
              disabled
            />
            
          </div>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter User Name"
              name="customerName"
              value={customerName}
              onChange={(e) => onInputChange(e)}
            />
            
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              PhoneNumber
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Phone No"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => onInputChange(e)}
              
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Your Email"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              customerAddress
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter User Name"
              name="customerAddress"
              value={customerAddress}
              onChange={(e) => onInputChange(e)}
            />
            
          </div>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              customerPwd
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter User Name"
              name="customerPwd"
              value={customerPwd}
              onChange={(e) => onInputChange(e)}
            />
            
          </div>

          <button type="submit" className="btn btn-outline-success">
            Submit
          </button>
          <Link  className="btn btn-outline-danger mx-2" to={'/'}>
            Cancel
          </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
