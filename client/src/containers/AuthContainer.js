import { useSelector } from "react-redux"
import { getUser } from "../features/auth/authSlice"
import { Navigate } from "react-router-dom"

export const AuthContainer = ({ children }) => {
    const user = useSelector(getUser)

    // Check if user is null or undefined
    if (user == null || user === undefined) {
        // Render children if user is null or undefined
        return children;
    } else {
        // Redirect to dashboard if user is authenticated
        return <Navigate to="/dashboard" />;
    }
}
