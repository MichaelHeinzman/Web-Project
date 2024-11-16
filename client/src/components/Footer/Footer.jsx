import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        <p>
          &copy; {new Date().getFullYear()} My Application. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
