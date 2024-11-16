import "./StatusBox.css";
import loadingIcon from "@assets/loading-icon.svg"; // Placeholder for loading icon
import successIcon from "@assets/success-icon.svg"; // Placeholder for success icon
import errorIcon from "@assets/error-icon.svg"; // Placeholder for error icon

const StatusBox = ({ status }) => {
  const renderContent = () => {
    switch (status) {
      case "loading":
        return (
          <>
            <img src={loadingIcon} alt="Loading" className="status-icon" />
            <p>Submitting...</p>
          </>
        );
      case "success":
        return (
          <>
            <img src={successIcon} alt="Success" className="status-icon" />
            <p>User created successfully!</p>
          </>
        );
      case "error":
        return (
          <>
            <img src={errorIcon} alt="Error" className="status-icon" />
            <p>There was an error. Please try again.</p>
          </>
        );
      default:
        return <p>Submit a form to see the status here.</p>;
    }
  };

  return <div className="status-box">{renderContent()}</div>;
};

export default StatusBox;
