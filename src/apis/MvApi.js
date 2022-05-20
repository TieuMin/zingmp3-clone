import { MV_API } from "../constants/Api";
import axios from "axios";

async function getMv(id, link, count) {
  return await axios
    .get(
      MV_API +
        `${id !== "" ? id : "IWZ9Z08I"}` +
        `&page=` +
        `${link}` +
        `&count=` +
        `${count}`
    )
    .catch((err) => {
      console.error(err.message);
    });
}

export default getMv;
