import { CognitoUserPool } from "amazon-cognito-identity-js";

// create a new user pool object with the user pool id and client id from the AWS Cognito console
const poolData = {
    UserPoolId: 'us-east-1_VUtiQpP3h',
    ClientId: 'vgkbubgq4jl5d6t4v6e1q9e9l'
}

//export the poolData object to be used in the app
export default new CognitoUserPool(poolData);