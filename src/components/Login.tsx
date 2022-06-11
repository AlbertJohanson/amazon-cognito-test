import { useState, useContext } from "react";
// import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
// import UserPools from "../aws/UserPools";
import {UserContext} from "./Account";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //@ts-ignore
  const { authenticate } = useContext(UserContext);

    const onSubmit = (e:any) => {
        e.preventDefault();
        authenticate(email, password)
        .then((result: any) => {
            console.log(`Login success:`, result);
        })
        .catch((err:any) => {
            console.error(`error: ${err}`);
        })      
    }


  return (
    <div style={{
        maxWidth: "400px",
        margin: "auto",
        marginTop: "100px",
    }}>
      <form onSubmit={onSubmit}>
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail3"
          aria-describedby="emailHelp"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
            Log in
          </button>
      </form>
    </div>
  );
};
