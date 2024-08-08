import React, { createContext, useState, useEffect } from "react";

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  //   const [myState, setMyState] = useState("Hello from Context!");
  const [articles, setArticles] = useState([]);
  const getArrticles = async () => {
    const res = await fetch("https://dev.to/api/articles");
    const data = await res.json();
    setArticles(data);
  };
  useEffect(() => {
    getArrticles();
  }, []);
  return (
    <MyContext.Provider value={{ articles }}>{children}</MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
