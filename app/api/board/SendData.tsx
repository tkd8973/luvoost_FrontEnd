import axios from "axios";

const headers = {
  "Content-Type": "application/json; charset=utf-8",
};

const API_URL = process.env.NEXT_PUBLIC_URL;

const SendData = async (
  method: string,
  sendurl: string,
  data: any,
  msg: string
) => {
    const targetURL = `${API_URL}` + sendurl;
  try {
    const response = await axios({ method, url: targetURL, data, headers });
    console.log(method, response.data);
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export default SendData;