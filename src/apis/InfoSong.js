import { GET_INFO_SONG } from "../constants/Api";
import axios from "axios";

async function getInfoSong(id) {
  return await axios.get(GET_INFO_SONG + `${id}`).catch((err) => {
    console.error(err.message);
  });
}

export default getInfoSong;
