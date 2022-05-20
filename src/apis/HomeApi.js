import { HOME_API } from "../constants/Api";
import axios from "axios";

async function getApi(link) {
  return await axios.get(HOME_API + `${link}`).catch((err) => {
    console.error(err.message);
  });
}

export default getApi;
