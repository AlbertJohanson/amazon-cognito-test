import { createContext } from "react";
import { CognitoUser, AuthenticationDetails, CognitoUserSession } from "amazon-cognito-identity-js";
import Pool from '../aws/UserPools'




// @ts-ignore
const UserContext = createContext()


type Props ={
    children: React.ReactNode;
}



const Account = ({children}: Props) => {


  //getSeesion function is used to get the current session of the user returns a promise with the session
  const getSession = () => {
    return new Promise<PromiseConstructor>((resolve, reject) => {
      const user = Pool.getCurrentUser()
      //if the user is  logged in
      if(user) {
        //get the session of the user
        user.getSession((err:Error, session:any) => {
          if(err) {
            reject(err)
          } else {
            resolve(session)
          }
        })
      } else {
        reject("No user")
      }
    })
  }

  //Tje authenticate function is used to authenticate the user with the given email and password
  const authenticate = async (Username:string, Password:string) => {
    return new Promise<CognitoUserSession>((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool });

      const authenticationDetails = new AuthenticationDetails({
        Username,
        Password,
      });

      //the authenticateUser function is used to authenticate the user with the given email and password
      user.authenticateUser(authenticationDetails, {
        onSuccess: (result) => {
          console.log(`Login success:`, result);
          resolve(result);
        },
        onFailure(err) {
          console.error(`error: ${err}`);
          reject(err);
        },
        newPasswordRequired: (result) => {
          console.log(`new password required: ${result}`);
          resolve(result);
        },
      });
    });
  };


  const LogOut = () => {
    const user = Pool.getCurrentUser()
    if(user) {
      user.signOut()
    }
  }

  return <UserContext.Provider value={{authenticate, getSession, LogOut}}>
    {children}
  </UserContext.Provider>;
};

export  {Account, UserContext};



