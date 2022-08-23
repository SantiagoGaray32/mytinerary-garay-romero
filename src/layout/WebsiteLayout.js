import Footer from "../components/Footer/Footer";

function WebsiteLayout({ children }) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}

export default WebsiteLayout;
