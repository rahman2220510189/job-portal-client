import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Fotter from "../Shared/Fotter/Fotter";


const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Fotter></Fotter>
        </div>
    );
};

export default MainLayout;