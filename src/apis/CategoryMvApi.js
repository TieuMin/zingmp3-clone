import { Category_mv } from "../constants/Api";
import axios from "axios";

async function getCategoriesMv(id) {
  return await axios.get(Category_mv + `${id}`).catch((err) => {
    console.error(err.message);
  });
}

export default getCategoriesMv;
