import { Link } from "react-router-dom";
import Navbar2 from "../nav2";
import Sidebar from "../../components/Sidebar";

const H2: React.FunctionComponent = () => {
    return(
        
        <>
            <Sidebar />
            <header className="site-header container animated fadeInDown">
                <div className="row header-wrapper">
                    <div className=" wd-18 col- ml-4 mr-6 site-branding">
                         <Link className="m-4" to="/"><h1>HEI</h1></Link>
                    </div>
                        <div className=" wd-18 col-5 ml-4">
                            <Navbar2 />
                        </div>
                </div>        
            </header>
            
            <div id="menu-container">
                <div id="menu-1" className="homepage home-section container">
                    <div className="home-intro text-center">
                        <h2 className="welcome-title animated fadeInLeft bryan"> List of h2</h2>
                    </div>
                </div>
            </div>
        </>
        
    ) 
  }


  export default H2