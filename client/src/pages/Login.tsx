import axios from "axios";
import React, { useEffect } from "react";

const Login = () => {
  const [login, setLogin] = React.useState(false);

  useEffect(() => {
    axios
      .get(
        "https://www.thecocktaildb.com/api/json/v1/1/list.php?/carrello/login",
        {
          headers: {
            Authorization: "Basic Federica:Forti",
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          setLogin(true);
        }
      })
      .catch((error) => {
        if (error instanceof Error) {
          alert(error.message);
        }
      });
  });

  return <></>;
};

export default Login;
