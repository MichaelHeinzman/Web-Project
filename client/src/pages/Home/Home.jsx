import "./Home.css";
import UserForm from "@components/UserForm/UserForm";
import Users from "@components/Users/Users";

const HomePage = () => {
  return (
    <div>
      <h2 className="home-title">Welcome to the Home Page</h2>
      <p className="home-description">
        This is the main landing page of the application.
      </p>
      <UserForm />
      <Users />
    </div>
  );
};

export default HomePage;
