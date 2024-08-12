import React, { createContext, useState, useEffect } from "react";

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");

  const [count, setCount] = useState(9);

  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    const res = await fetch(
      `https://dev.to/api/articles?page=1&per_page=${count}`
    );
    const data = await res.json();
    setArticles(data);
  };

  useEffect(() => {
    getArticles();
  }, [count]);

  const handleClick = () => {
    setCount(count + 3);
  };

  return (
    <MyContext.Provider
      value={{
        articles,
        count,
        setCount,
        searchValue,
        setSearchValue,
        handleClick,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
