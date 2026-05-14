import { useState } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import useTheme from "../Hooks/useTheme"

const Header = () => {
  let[searchValue,setsearchValue] = useState()
  const changeinput = (e) => {
    let{value} = e.target
    setsearchValue(value)
  }
  let {theme,setTheme,changeTheme} = useTheme()
  let navigate = useNavigate()
 return<>
  
<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <div className="container-fluid">
    <div className="collapse navbar-collapse d-flex justify-content-between" id="mynavbar">
      <form className="d-flex justify-content-between gap-2">
        <input className="form-control me-2" type="text" placeholder="Search" onChange={changeinput} />
        <button className="btn btn-primary" type="button" onClick={(e)=>{navigate(`/?title=${searchValue}`)}}>Search</button>
        <select className="col-3 p-1 rounded" onChange={(e) => changeTheme(e.target.value)} value={theme === "dark" ? "Dark" : "Light"}>
        <option value="Light" >Light</option>
        <option value="Dark" >Dark</option>
      </select>
      </form>
      
    <ul className="navbar-nav">
        <li className="nav-item bg-light rounded m-2">
          <NavLink to={"/movies"} className={(navDate)=>navDate.isActive?"nav-link bg-success rounded text-dark" : "nav-link rounded text-dark"}>Movies</NavLink>        
      </li>
      <li className="nav-item bg-light rounded m-2">
          <NavLink to={"/favourits"} className={(navDate)=>navDate.isActive?"nav-link bg-success rounded text-dark" : "nav-link rounded text-dark"}>Favourits</NavLink>         
      </li>
      <li className="nav-item bg-light rounded m-2">
          <NavLink to={"/home"} className={(navDate)=>navDate.isActive?"nav-link bg-success rounded text-dark" : "nav-link rounded text-dark"}>Home</NavLink>
      </li>
      <li className="nav-item bg-light rounded m-2">
          <NavLink to={"/about-us"} className={(navDate)=>navDate.isActive?"nav-link bg-success rounded text-dark" : "nav-link rounded text-dark"}>About Us</NavLink>
      </li>
    </ul>
    </div>
    
  </div>
</nav>
 </>
}
export default Header