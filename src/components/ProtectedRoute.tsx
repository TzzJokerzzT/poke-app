import useAuthStore from "@store/authStore";
import SpinnerComponent from "@components/UI/Spinner/Spinner";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}: {children: React.ReactNode}) => {
const {user, isLoading} = useAuthStore();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <SpinnerComponent color="danger" />
      </div>
    );
  }

  if(!user) return <Navigate to="/login" />;
return children;
};

export default ProtectedRoute;