import axios from "axios";

export async function signUp( email, password ) {
  if (email && password) {
    const response = {
      data: null,
      error: null,
    };

    await axios
      .post("url", {
        email,
        password,
      })
      .then((res) => {
        if (res.data) {
          response.data = res.data;
          return;
        }
        response.error = res.error;
      })
      .catch((err) => {
        console.error(err);
        response.error = "Some thing went wrong, try again later.";
      });

    return response;
  } else {
    throw new Error("enter user name and pass both");
  }
}

export async function authenticate( token ) {
  if (token) {
    const response = {
      data: null,
      error: null,
    };

    await axios
      .post("auth url", {
        token
      })
      .then((res) => {
        if (res.data) {
          response.data = res.data;
          return;
        }
        response.error = res.error;
      })
      .catch((err) => {
        console.error(err);
        response.error = "Some thing went wrong, try again later.";
      });

    return response;
  } else {
    throw new Error("enter token");
  }
}
