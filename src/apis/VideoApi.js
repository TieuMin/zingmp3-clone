import { GET_VIDEO } from "../constants/Api";
import axios from "axios";

async function getVideo(id) {
  return await axios.get(GET_VIDEO + `${id}`).catch((err) => {
    console.error(err.message);
  });
}

export default getVideo;
