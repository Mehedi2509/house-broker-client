import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import PreLoader from "../../components/PreLoader";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const {user, loading} =useAuth();
    const location = useLocation();

    if(loading){
       return <PreLoader/>
    }

    if(user){
        return children;
    }

    return <Navigate to={"/login"} state={{from: location}} replace />
};

export default PrivateRoute;