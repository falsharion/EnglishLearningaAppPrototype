import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { RiHome4Line, RiHome5Fill, RiSettings3Line, RiSettings3Fill } from 'react-icons/ri';
import { IoStatsChart, IoStatsChartOutline } from "react-icons/io5";
import { TbUsers } from 'react-icons/tb';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <NavLink to="/" end>
          {({ isActive }) => (isActive ? <RiHome5Fill /> : <RiHome4Line />)}
        </NavLink>
        <NavLink to="/Progress">
          {({ isActive }) => (isActive ? <IoStatsChart />: <IoStatsChartOutline />)}
        </NavLink>
        <Link>
           <TbUsers />
        </Link>
        <Link>
          <RiSettings3Line />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

