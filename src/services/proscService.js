import axios from "axios";

export async function callProsc(data) {
  return axios.post("http://localhost:3000/dynamic/analyzeUser/v1", data, {
    headers: {
      Authorization: Buffer.from("admin:supersecret").toString("base64")
    }
  });
}
