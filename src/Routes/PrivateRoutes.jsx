import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user,loading } = useContext(AuthContext);
  console.log(user);
  const location = useLocation();

  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return children;
  }
  return (
    <div>
      <Navigate to="/login" state={{ from: location }} replace></Navigate>
    </div>
  );
};

export default PrivateRoutes;