import HttpService from "./HttpService";

export const RegisterUserService = (credentials) => {
  const http = new HttpService();
  let signupUrl = "/register";
  return http
    .postData(credentials, signupUrl)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

export const LoginUserService = (credentials) => {
  const http = new HttpService();
  let loginUrl = "login";
  return http
    .postData(credentials, loginUrl)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

export const LogOutUserService = () => {
  const http = new HttpService();
  let loginUrl = "logout";
  const tokenId = "user-token";
  return http
    .getData(loginUrl, tokenId)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

export const registerFromEmail = (credentials) =>{
  const http = new HttpService();
  let signupUrl = "/registerFromEmail";
  return http
    .postData(credentials, signupUrl)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};


const createFolder = (credentials) =>{
  const http = new HttpService();
  let signupUrl = "/folders";
  return http
    .postData(credentials, signupUrl)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};


const getProfile = (credentials) =>{
  const http = new HttpService();
  let url = "/profile";
  return http
    .getData(credentials, url)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

export const getUserFromMail = (mail) =>{
  const http = new HttpService();
  let signupUrl = "/users/getUserFromEmail";
  return http
    .getData(mail, signupUrl)
    .then((data) => {
      console.log("AS --- ")
      console.log(data)
      console.log("---")
      return data;
    })
    .catch((error) => {
      return error;
    });
};

export const userHasAccount = (credentials) =>{
  const http = new HttpService();
  let signupUrl = "users/userHasAccount";
  return http
    .postData(credentials, signupUrl)
    .then((data) => {
      console.log(data)
      return data;
    })
    .catch((error) => {
      if (error == "SyntaxError: JSON.parse: unexpected character at line 1 column 1 of the JSON data"){
        alert("Erreur d'accès à la base de données")
      }
      return error;
    });
};


const updateFolder = (credentials, id) =>{
  const http = new HttpService();
  let signupUrl = "/profile/" + id;
  return http
    .getData(credentials, signupUrl)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};