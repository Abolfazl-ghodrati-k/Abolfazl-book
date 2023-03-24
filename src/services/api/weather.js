import axios from "axios";

export default async function recieve_data(city) {
  const response = {
    data: null,
    error: null,
  };
  try {
    const res = await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`
      )
      .then((res) => res.data);
    response.data = res;
    response.error = "";
    return response
  } catch (error) {
    response.data = "";
    response.error = error;
    return response
  }
}
