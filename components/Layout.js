import Footer from "./Footer";
import Navbar from "./Navbar";

// We put Layout in _app.js. This way each component will get Navbar and Footer applied by default 
const Layout = ({children}) => {
    return ( 
    <div className="content">
        <Navbar />
        {children}
        <Footer />
    </div>
     );
}
 
export default Layout;