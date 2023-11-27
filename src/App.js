import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
// import "react-pro-sidebar/dist/css/styles.css";
import Sidebar from "./Components/Features/Sidebar/Index";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Components/Features/Navbar/navbar";
import Footer from "./Components/Features/Footer/Index";
import ContactUs from "./Components/Features/ContactUs/Index";
import CustomerReview from "./Components/Features/CustomerReview/Index";
import Choose from "./Components/Features/Choose";
import Services from "./Components/Features/Services/Index";
import AutoService from "./Components/Features/Autoservice/Index";
function App() {
  // const { collapseSidebar } = useProSidebar();
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <AutoService />
      <Services />
      <Choose />
      <CustomerReview />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
