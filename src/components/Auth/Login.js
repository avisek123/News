import React, { useState } from "react";

function Login(props) {
  const [login, setLogin] = useState(true);
  return (
    <div>
      <h2 className="mv3">{login ? "Login" : "Create  Account"}</h2>
      <form action="" className="flexC">
        {!login && (
          <input type="text" placeholder="Your name" autoComplete="off" />
        )}

        <input type="email" placeholder="Your email" autoComplete="off" />
        <input
          type="password"
          placeholder="Choose a secure password"
          autoComplete="off"
        />
        <div className="flex mt3">
          <button type="submit" className="button pointer mr2">
            Submit
          </button>
          <button
            type="button"
            className="pointer button"
            onClick={() => setLogin((previousLogin) => !previousLogin)}
          >
            {login ? "Need to create an account?" : "Already have an account"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
