import { GET_SONG } from "../constants/Api";
import axios from "axios";

async function getSong(id) {
  return await axios.get(GET_SONG + `${id}`).catch((err) => {
    console.error(err.message);
  });
}

export default getSong;
