import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { Context } from '..';

const Home = () => {
  const{isAuthenticated} = useContext(Context);
  
  if(!isAuthenticated) { return <Navigate to={"/login"}/>}
  return (
    <div>
     <h1>Welcome to the home page</h1>
    </div>
  )
}

export default Home