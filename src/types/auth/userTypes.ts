export interface UserCredentials {
  username: string;
  password: string;
}

export interface User {
  username: string;
  firstName: string;
  lastName: string;
}

export interface SignInAPIResponse {
  username: string;
  firstName: string;
  lastName: string;
  accessToken: string;
}
