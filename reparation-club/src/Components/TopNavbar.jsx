import React from 'react'
import styles from "../css/topnav.module.css"
import { useNavigate } from "react-router-dom";
// import Badge from '@mui/material/Badge';

// import { GrCart } from "react-icons/gr";

export const TopNavbar = () => {
    let navigate = useNavigate();
  return (
    <div>
        <div className={styles.navwrapper}>
            <ul className={styles.listnav}>
                <li className = {styles.logo}>
                    <div onClick={() => navigate('/')}>
                    <img src = "./image/logoimg.png=" className={styles.logoimg}alt="logo"/>
                    </div>
                </li>
                <li className={styles.search}>
                    <div >
                        <input type = "text" placeholder =" Search for Products, brands.." className={styles.inputsearch}/>
                    </div>
                    
                </li>
                <li>
                    
                </li>
                <li>
                    <div>
                        <button>Login</button>
                    </div>
                </li>
                <li>
                <div>
                       <p>CartLogo</p>
                    </div>
                    
                </li>
                <li>
                    <div>
                    {/* <Badge color="secondary" 
            sx={{
              "& .MuiBadge-badge": {
                color: "#fff",
                backgroundColor: "#00c2c1",
                marginTop:1,
                width:2,
                height:15,
               
              }
            }}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}

            badgeContent={0} showZero>
          <GrCart/>
        </Badge> */}
                    </div>
                </li>
            </ul>
        </div>


    </div>
  )
}
export default TopNavbar;