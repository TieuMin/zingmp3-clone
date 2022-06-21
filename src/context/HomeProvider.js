import React, { createContext, useEffect, useState } from "react";
import getAip from "../apis/HomeApi";
import getMv from "../apis/MvApi";
import getCategoriesMv from "../apis/CategoryMvApi";

export const HomeContext = createContext();

const HomeProvider = ({ children }) => {
  const [rank, setRank] = useState(0);
  const [idMv, setIdMv] = useState("IWZ9Z08I");
  const [categoryMv, setCategoryMv] = useState("");
  const [animation, setAnimation] = useState(true);
  const [nameCategoryMv, setNameCategoryMv] = useState({ id: "" });
  const [loadPage, setLoadPage] = useState(false);
  let ab = 0;
  const [loader, setLoader] = useState({
    loadPage: false,
    stores: "",
  });

  const [mv, setMv] = useState({
    stores: "",
  });

  async function loadData() {
    const datas = [];
    await Promise.all([
      getAip(1),
      getAip(2),
      getAip(3),
      getAip(4),
      getAip(5),
    ]).then((items) => {
      items.forEach((item) => {
        datas.push(...item.data.data.items);
      });
    });
    setLoader({
      ...loader,
      stores: datas,
    });
  }

  async function loadmv() {
    await getMv(idMv, 1, 15).then((items) => {
      setMv({
        ...loader,
        stores: items.data.data.items,
      });
    });
  }
  async function loadCategoryMv() {
    await getCategoriesMv(idMv).then((items) => {
      setCategoryMv(items.data.data.childs);
    });
  }

  useEffect(() => {
    loadData();
    loadmv();
    loadCategoryMv();
  }, []);

  useEffect(() => {
    if (loadPage) {
      setAnimation(true);
      setLoader({
        loadPage: false,
        stores: "",
      });
      loadData();
      setLoadPage(false);
    }
  }, [loadPage]);

  useEffect(() => {
    setAnimation(true);

    if (categoryMv !== "") {
      loadmv();
      loadCategoryMv();
      setNameCategoryMv({ id: "" });
      categoryMv.map((item) => {
        if (item.id === idMv) return setNameCategoryMv(item);
      });
    }
  }, [idMv]);

  useEffect(() => {
    // clean up code
    if (loader.stores !== "") {
      setAnimation(false);
      //rank
      loader.stores[7].items.forEach((a, index) => {
        if (index < 3) ab += a.score;
      });
      setRank(ab);
    }
  }, [loader.stores, mv.stores]);

  const handleScroll = (event) => {
    if (event.target.scrollTop >= 800) setLoader({ ...loader, loadPage: true });
  };

  const datas = {
    loader,
    mv,
    handleScroll,
    rank,
    setIdMv,
    animation,
    categoryMv,
    idMv,
    nameCategoryMv,
    setLoadPage,
  };

  return <HomeContext.Provider value={datas}>{children}</HomeContext.Provider>;
};

export default HomeProvider;
