import { useContext } from "react"
import { UserContext } from "../context/userContext";

export const useUser = () => {
  const name = useContext(UserContext);
  return name;
}