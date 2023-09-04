import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const location=useLocation();
    // if(user){
    //     return children;
    // }
    return (
      <div>
        <Navigate to="/login" state={{ from: location }} replace></Navigate>
      </div>
    );
};

export default PrivateRoutes;