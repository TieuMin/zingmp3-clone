import { GET_PLAYLIST } from "../constants/Api";
import axios from "axios";

async function getPlaylist(id) {
  return await axios.get(GET_PLAYLIST + `${id}`).catch((err) => {
    console.error(err.message);
  });
}

export default getPlaylist;
