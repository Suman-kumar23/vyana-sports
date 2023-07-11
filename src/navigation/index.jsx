import UserStack from "./userStack";
import AuthStack from "./authStack";
import { useSelector } from "react-redux";

const RootNavigation = () => {
  const user = useSelector((state) => state.auth.user);
  return user ? <UserStack /> : <AuthStack />;
};

export default RootNavigation;
