import { Navigate, useLocation } from "react-router";
import { useAuthContext } from "../AuthProvider/AuthProvider";

const UserRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuthContext();
  if (loading) return "Loading... check User";
  if (user) {
    return children;
  }
  console.log(location);
  return <Navigate state={location.pathname} replace={true} to="/login" />;
};

export default UserRoute;
