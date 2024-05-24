import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";


const MainLayout = () => {
    return (
        <div>
            {/* navbar  */}
            <Navbar/>
            {/* outlate  */}
            <div className="min-h-[calc(100vh-317px)]">
            <Outlet/>
            </div>
            {/* footer  */}
            <Footer/>
        </div>
    );
};

export default MainLayout;