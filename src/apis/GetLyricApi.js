import { GETLYRIC } from "../constants/Api";
import axios from "axios";

async function GetLyricApi(id) {
  return await axios.get(GETLYRIC + `${id}`).catch((err) => {
    console.error(err.message);
  });
}

export default GetLyricApi;
