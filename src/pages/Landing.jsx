import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
    <div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
        <div className="w-75 p-5 border shadow  border-dark">
          <h1 className="text-danger">CRUD COMPANY APP</h1>
          <p className=" text-secondary text-align-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil et possimus itaque iusto nulla aliquid iure molestias harum suscipit. Tenetur accusantium rem debitis, dolores nobis vero exercitationem aut.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vitae numquam dignissimos velit enim similique voluptates commodi ullam ducimus modi sapiente reprehenderit, nisi iure maxime, suscipit qui porro aperiam delectus? Iure, nisi.</p>
          <Link to={'/dashboard'} className="btn btn-outline-dark">GO TO DASHBOARD</Link>
        </div>
    </div>
    </>
  )
}

export default Landing