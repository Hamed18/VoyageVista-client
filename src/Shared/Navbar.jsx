import { Link, NavLink } from "react-router-dom";
import userdefaultPic from "../assets/Images/user.png";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const Navbar = () => {
 const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
    .then()
    .catch();
  }; 

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allspots">All Spots</NavLink>
      </li>
      <li>
        <NavLink to="/addspots">Add Spots</NavLink>
      </li>
      <li>
        <NavLink to="/mylist">My List</NavLink>
      </li>
    </>
  );

  return (
    <div className="max-w-6xl mx-auto mt-2">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl font-bold">VoyageVista</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

       <div className="navbar-end">
          {user ? (
            <div className="flex mr-2">
              <div className="w-10 rounded-full md:tooltip md:tooltip-left" data-tip={user.displayName}>
                <img alt="Tailwind CSS Navbar component" src={user?.photoURL? user.photoURL : {userdefaultPic}} className="rounded-full mr-1" />
              </div>
              <button onClick={handleSignOut} className="btn btn-primary">
                Sign Out
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-primary">Login</button>
            </Link>
          )}  
		</div> 
      </div>
    </div>
  );
};

export default Navbar;