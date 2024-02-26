import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewUser() {

    const [user, setUser] = useState({
        Id:"",
        customerName: "",
        phoneNumber: "",
        email: "",
        customerPwd:"",
        customerAddress:""
      });

    const {id}=useParams();

    useEffect(()=>{
        loadUser();
    },[]);

    const loadUser=async()=>{
        const result=await axios.get(`https://localhost:7157/api/Customer/GetById?Id=${id}`)
        setUser(result.data);
    }

  return (
    <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h2>User Detail</h2>
        <div className='card'>
            <div className='card-header'>
                details Of User Id : {user.id}
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>User Name:</b>{user.customerName}
                    </li>
                    <li className='list-group-item'>
                        <b>Email :</b>{user.email}
                    </li>
                    <li className='list-group-item'>
                        <b>Phone Number:</b>{user.phoneNumber}
                    </li>
                    <li className='list-group-item'>
                        <b>Address:</b>{user.customerAddress}
                    </li>
                </ul>
            </div>
            <Link className='btn btn-primary my-2'
            to={'/'}
            >Home Page</Link>
        </div>
        </div>
        </div>
        </div>
  )
}
