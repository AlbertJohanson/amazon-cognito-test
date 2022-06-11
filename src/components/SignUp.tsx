import { useState } from "react";
import UserPools from "../aws/UserPools";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        //This is where you would call the sign up function from the UserPools class
        UserPools.signUp(email, password, [], [], (err, data) => {
            //if there is an error, log it
            if (err) {
                console.error(err);
            } else {
                //if there is no error, log the data
                console.log(data);
            }
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
          id="exampleInputEmail1"
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
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
            Submit
          </button>
      </form>
    </div>
  );
};
