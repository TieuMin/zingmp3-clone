import React, { createContext, useState, useEffect } from "react";
import SearchApi from "../apis/SearchApi";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [key, setKey] = useState("");
  const [dataSearch, setDataSearch] = useState();

  const search = async () => {
    await SearchApi(key).then((items) => {
      setDataSearch(items.data.data);
    });
  };

  useEffect(() => {
    if (key !== "") {
      search();
    }
  }, [key]);

  const datas = { key, setKey, dataSearch };

  return (
    <SearchContext.Provider value={datas}>{children}</SearchContext.Provider>
  );
};

export default SearchProvider;
