import { Routes, Route } from "react-router-dom";

import HomeLogo from "../Pages/Home";
import SearchBar from "../Pages/SearchBar";
import LogInButton from "../Pages/LogInButton";
import CartLogo from "../Pages/Cartlogo";

const AllRoutes = () => {
    return (

        <Routes>
            <Route path="/" element={<HomeLogo />} />
            <Route path="/search" element={<SearchBar />} />
            <Route path="/login" element={<LogInButton />} />
            <Route path="/cartlogo" element={<CartLogo />} />
        </Routes>
    )

}

export default AllRoutes;