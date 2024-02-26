import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);
  const {id}=useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("https://localhost:7157/api/Customer/All");
    setUsers(result.data);
  };

  const deleteUser=async(id)=>{
    await axios.delete(`https://localhost:7157/api/Customer/Delete?Id=${id}`);
    loadUsers();
  }

  return (
    <div className="container ">
      <div className="py-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">User Name</th>
              <th scope="col">Contact</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th scope="row">{user.id}</th>
                <td>{user.customerName}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.email}</td>
                <td>
                  <Link to={`/viewuser/${user.id}`} className="btn btn-primary mx-2">View</Link>
                  <Link 
                  to={`/edituser/${user.id}`}
                  className="btn btn-outline-primary mx-2">Edit</Link>
                  <button className="btn btn-danger mx-2" onClick={()=>deleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
