import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../Store/user/userSelector";


export function ProtectedRoute({ children }) {
    const currentUser = useSelector(selectCurrentUser)
    const location = useLocation();

    if (currentUser === null) {
        return <Navigate to="/auth" state={{ from: location }} replace />;
    }
    return children;
}