import { useContext } from "react";
import { UserContext } from "./UserContext";

const User = () => {
  const userContext = useContext(UserContext);

  const handleUserDetails = () => {
    userContext.setUser({
      name: "Vipul",
      email: "vipul@example.com",
    });
  };

  return (
    <>
      <p>
        User name is {userContext.user?.name} and email is{" "}
        {userContext.user?.email}
      </p>
      <button onClick={handleUserDetails}>Set User Details</button>
    </>
  );
};

export default User;
