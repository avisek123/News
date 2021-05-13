import React, { useState } from "react";
import useFormValidation from "../../Hooks/useFormValidation";
const INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
};
function Login(props) {
  const [login, setLogin] = useState(true);

  const { handleChange, handleSubmit, values } =
    useFormValidation(INITIAL_STATE);
  return (
    <div>
      <h2 className="mv3">{login ? "Login" : "Create  Account"}</h2>
      <form action="" className="flexC" onSubmit={handleSubmit}>
        {!login && (
          <input
            type="text"
            name="name"
            value={values?.name}
            placeholder="Your name"
            onChange={handleChange}
            autoComplete="off"
          />
        )}

        <input
          type="email"
          value={values?.email}
          name="email"
          placeholder="Your email"
          onChange={handleChange}
          autoComplete="off"
        />
        <input
          type="password"
          name="password"
          value={values?.password}
          placeholder="Choose a secure password"
          autoComplete="off"
          onChange={handleChange}
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
