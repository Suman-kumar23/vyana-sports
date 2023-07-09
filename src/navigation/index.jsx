import { useAuthentication } from "../utils/useAuthentication";

import UserStack from "./userStack";
import AuthStack from "./authStack";

const RootNavigation = () => {
  const { user } = useAuthentication();
  return user ? <AuthStack /> : <UserStack />;
};

export default RootNavigation;
