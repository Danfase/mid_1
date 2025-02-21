import { createContext, useState, useContext } from 'react';

const LikesContext = createContext();

export const LikesProvider = ({ children }) => {
  const [likes, setLikes] = useState(0);

  const addLike = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  return (
    <LikesContext.Provider value={{ likes, addLike }}>
      {children}
    </LikesContext.Provider>
  );
};

export const useLikes = () => useContext(LikesContext);