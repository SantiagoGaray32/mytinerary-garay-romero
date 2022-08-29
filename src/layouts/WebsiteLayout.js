import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";

function WebsiteLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default WebsiteLayout;
