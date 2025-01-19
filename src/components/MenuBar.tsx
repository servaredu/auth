import { NavLink } from "react-router";

export default function MenuBar() {
  return (<>
    <div className="menu">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/teacher">Teacher</NavLink>
    <NavLink to="/admin">Admin</NavLink>
    <NavLink to="/parent">Parent</NavLink>
    <NavLink to="/student">Student</NavLink>
    <NavLink to="/regent">Regent</NavLink>
    
  </div>
  </>
  )
}