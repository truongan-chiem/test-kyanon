import { createContext, useContext } from "react";
export type GlobalContent = {
  isLogin: boolean;
  setLogin: (c: boolean) => void;
};
export const MyGlobalContext = createContext<GlobalContent>({
  isLogin: false, // set a default value
  setLogin: () => {},
});
export const useGlobalContext = () => useContext(MyGlobalContext);
