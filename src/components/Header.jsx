import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context, server } from '../index';
import axios from 'axios';
import toast from 'react-hot-toast';

const Header = () => {
  const {isAuthenticated,setIsAuthenticated,Loading,setLoading} = useContext(Context);
  // console.log(isAuthenticated);
  const logoutHandler= async ()=>{
    setLoading(true);
       try {
        console.log(server);
        await axios.get(`${server}/users/logout`,{
            withCredentials:true,
        })
        toast.success("Logged out successfully");
        setIsAuthenticated(false);
        setLoading(false);

    } catch (error) {
        toast.error(error.message);
        console.log(error.message);  
        setIsAuthenticated(true);
        setLoading(false);
    }
   };


  return (
    <>
     <img className='logo' src="https://wallpapercave.com/wp/wp4538149.jpg"  alt="" srcset="" />
    
    <div className="heading"> Ecohub </div>
    <nav className='Navbar'>
   
        <article>
        <Link to={"/"}>Home</Link>
        <Link to={"/blogs"}>Blogs</Link>
        <Link to={"/community"}>Community</Link>
        <Link to={"/shopping"}>Shopping</Link>  
        </article>
        {
          isAuthenticated?  (<button onClick={logoutHandler} disabled={Loading} className='btn'>Logout</button>) :   (<Link className="btn" to={"/login"}>Login</Link>)
        }
      
    </nav>
    </>
  )
}

export default Header

// className='btn'