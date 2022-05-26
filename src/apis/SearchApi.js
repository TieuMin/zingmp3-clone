import { SEARCH } from "../constants/Api";
import axios from "axios";

async function SearchApi(key) {
  return await axios.get(SEARCH + `${key}`).catch(function (err) {
    console.error(err.message);
  });
}

export default SearchApi;
