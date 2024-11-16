import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import "./Default.css";

const DefaultLayout = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      <main className="layout-main">{children}</main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
