import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";


const PrivateRoute = ({role}) => {
    const user = useSelector((state) => state.user.user);

    if(role && user?.id && user?.role === role){
        return <Outlet />;
    }

    if (!user?.id) {
        return <Navigate replace to={"/"} />;
    }else {
        return <Outlet />;
    }
};

export default PrivateRoute;