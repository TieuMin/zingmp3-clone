import React, { createContext, useState, useEffect } from "react";
import SearchApi from "../apis/SearchApi";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [key, setKey] = useState("");
  const [dataSearch, setDataSearch] = useState();
  const [dataEnterSearch, setDataEnterSearch] = useState();
  const [enterSearch, setEnterSearch] = useState(false);
  const [loadSearch, setLoadSearch] = useState(true);

  const search = async () => {
    await SearchApi(key).then((items) => {
      if (enterSearch) {
        setDataEnterSearch(items.data.data);
        setEnterSearch(false);
        setLoadSearch(false);
      } else setDataSearch(items.data.data);
    });
  };

  useEffect(() => {
    if (key !== "") {
      search();
    }
  }, [key]);

  useEffect(() => {
    if (enterSearch) {
      search();
      setLoadSearch(true);
    }
  }, [enterSearch]);

  const datas = {
    key,
    setKey,
    dataSearch,
    dataEnterSearch,
    setEnterSearch,
    loadSearch,
  };

  return (
    <SearchContext.Provider value={datas}>{children}</SearchContext.Provider>
  );
};

export default SearchProvider;
