import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }
    const { data: catagorys = [] } = useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/catagory`);
            const data = await res.json();
            return data
        }
    });
    const menuItems = <React.Fragment>
        <li><Link to="/">Home</Link></li>
        <li tabIndex={0}>
            <div className="dropdown dropdown-bottom">
                <label tabIndex={0} className="btn bg-transparent hover:bg-transparent border-0 capitalize">Catagorys</label>
                <ul tabIndex={0} className="dropdown-content bg-[#D55DBD]  w-max">
                    {
                        catagorys.map(catagory =>
                            <li><Link to={`/catagories/${catagory.catagory_id}`}>{catagory.catagory_name}</Link></li>
                        )
                    }

                </ul>
            </div>
        </li>
        <li><Link to="/product">Product</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        {user?.uid ?
            <>

                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><button onClick={handleLogOut}>Sign out</button></li>

            </>
            :
            <li><Link to="/login">Login</Link></li>
        }


    </React.Fragment>
    return (
        <div className="navbar   font-semibold  bg-gradient-to-r from-purple-700 to-pink-400 flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={5} className="btn text-white btn-ghost  lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl text-white">HeadPhone</Link>
            </div>
            <div className="navbar-center hidden lg:flex text-white  ">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn text-white btn-ghost  lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>

        </div>
    );
};

export default Navbar;