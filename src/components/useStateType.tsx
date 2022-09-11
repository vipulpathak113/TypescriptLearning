import { useState } from "react";

type UseStateProps = {
  first: string;
  last: string;
};

const UseState = () => {
  const [user, setUser] = useState<null | UseStateProps>(null);

  const handleUser = () => {
    setUser({
      first: "Vipul",
      last: "Pathak",
    });
  };

  return (
    <>
      <p>
        User name is {user?.first} {user?.last}
      </p>
      <button onClick={handleUser}>Set User</button>
    </>
  );
};

export default UseState;
