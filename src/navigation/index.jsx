import UserStack from "./userStack";
import AuthStack from "./authStack";
import { useSelector } from "react-redux";

const RootNavigation = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return isLoggedIn ? <UserStack /> : <AuthStack />;
};

export default RootNavigation;
