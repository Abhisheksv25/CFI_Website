import React from "react";
import './App.css';
import './components/css/slick.css';
import './components/css/slick-theme.css';
import './components/css/animate.css';
import './components/css/iconfont.css';
import './components/css/font-awesome.min.css';
import './components/css/bootstrap.css';
import './components/css/magnific-popup.css';
import './components/css/bootsnav.css';
import { Navbar, Nav } from "react-bootstrap";
import logo from "./components/images/logo.png";
// import "./font.css";
import Navigationbar from "./navbar";
import Section0 from "./section0";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";

class Content extends React.Component {
    render() {
        return (
            <div>

                    {/* <Navigationbar /> */}
                    
                    {/* section 0  */}
                    {/* <Section0/> */}
                    {/* end of section 0 */}
        
                    {/* section 1  */}
                    <Section1/>
                    {/* end of section 1 */}

                    {/* section 2  */}
                    {/* <Section2/> */}
                    {/* end of section 2 */}
                    
                    {/* section 3  */}
                    {/* <Section3/> */}
                    {/* end of section 3 */}
        
                    {/* section 4  */}
                    {/* <Section4/> */}
                    {/* end of section 4 */}
                    
                </div>      
        );
      }
  }


export default Content;