import { Account } from "./components/Account";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { Status } from "./components/Status";

type Props = {}

const App = (props: Props) => {
  return (
    <Account>
      <Status/>
      <SignUp />
      <Login />
    </Account>
  );
};

export default App;
