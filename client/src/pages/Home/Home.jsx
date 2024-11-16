import "./Home.css";
import UserForm from "@components/UserForm/UserForm";
import Users from "@components/Users/Users";
import DelayedLoader from "@components/DelayedLoader/DelayedLoader";

const HomePage = () => {
  return (
    <div>
      <h2 className="home-title">Welcome to the Home Page</h2>
      <p className="home-description">
        This is the main landing page of the application.
      </p>
      <UserForm />
      <Users />
      <DelayedLoader>
        <h3>
          This expensive image was delayed by 3 second after document load
        </h3>
        <img
          src="https://images.pexels.com/photos/547119/pexels-photo-547119.jpeg?cs=srgb&dl=pexels-dreamypixel-547119.jpg&fm=jpg"
          alt="Very Expensive Image"
          loading="eager"
          fetchPriority="high"
          style={{ width: "100%", height: "auto", maxWidth: "1200px" }}
        />
      </DelayedLoader>
    </div>
  );
};

export default HomePage;
