import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
// import "react-pro-sidebar/dist/css/styles.css";
import Sidebar from "./test";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Components/Features/Navbar/navbar";
import Footer from "./Components/Features/Footer/Index";
import ContactUs from "./Components/Features/ContactUs/Index";
import CustomerReview from "./Components/Features/CustomerReview/Index";
import Choose from "./Components/Features/Choose";
import Services from "./Components/Features/Services/Index";
function App() {
  // const { collapseSidebar } = useProSidebar();
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Choose />
      <Services />
      <CustomerReview />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
