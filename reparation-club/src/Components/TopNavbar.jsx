// import React from 'react'
import { NavLink} from "react-router-dom";

// import styles from "../css/topnavbar.module.css";

const links= [
  {path:"/",title:"HEALTHKART"},
  {path:"/searchbar",title:"i"},
  {path:"/login",title:"Login"},
  {path:"/carticon",title:"CartLogo"}
] 





export const TopNavbar = () => {
    
  return (
    <div style={{
      display:"flex",
      alignItems:"center",
      justifyContent:"space-around",
      padding:"10px",
      backgroundColor:"pink"
      
  }}>
     
 

     {
      links.map((link) =>
      <NavLink
      // style={({isActive})=>{
      //   return isActive ? activeLinkStyle : defaultLinkStyle;
      // }}
      className={({isActive})=>{
          return isActive 
      }}
       key={link.path} to={link.path}>{link.title}</NavLink>)
     }

    


  </div>
  )
}
export default TopNavbar;