import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [count, setCount] = useState(9);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getArticles = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://dev.to/api/articles?page=1&per_page=${count}`
      );
      const data = await res.json();
      setArticles(data);
      setIsLoading(false);
    } catch (error) {
      console.log("er", error);
      setIsLoading(false);
      toast.warning("Интернет холболтоо шалгана уу");
    }
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
        isLoading,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
