import axios from "axios";

export async function fetchRooms(token) {
  if (token) {
    const response = {
      data: null,
      error: null,
    };

    await axios
      .get("url", {
        token,
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
    throw new Error("enter token for fetchRooms, sign in again.");
  }
}

export async function createRoom(token, users, language, code) {
  //   do the socket connection
}

export async function updateRooms(token, updates) {
  // do the socket connection
}
