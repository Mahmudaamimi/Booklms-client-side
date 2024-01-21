import React, { useContext } from 'react';
import { IoLibrary } from "react-icons/io5";
import { Link, NavLink } from 'react-router-dom';
import './navbar.css'
import { AuthContext } from '../Provider/Authprovider';

const Navbar = () => {
    const {user,logOut} = useContext(AuthContext)
    const navlink = <>
        <NavLink className='nav' to={'/'}>Home</NavLink> 
        <NavLink className='nav' to={'/addbook'}>Add book</NavLink> 
        <NavLink className='nav' to={'/allbooks'}>All books</NavLink> 
        <NavLink className='nav' to={'/borrowed'}>Borrowed books</NavLink> 
         
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlink}
                    </ul>
                </div>
                <Link className="text-xl flex items-center gap-3 font-semibold"><IoLibrary></IoLibrary>SUSIS Library</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlink}
                </ul>
            </div>
            <div className="navbar-end">
            {
                    user?.email ?
                        <div className='flex items-center gap-2'>
                            <img className='rounded-full w-8' src={user.photoURL} alt="" />
                            <span>{user.displayName}</span>                        
                            <Link>
                            <button onClick={logOut} className="btn btn-neutral">Logout</button>
                            </Link>
                            
                        </div>

                        :
                        <Link to='/login'>
                            <button className="btn btn-neutral">Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;