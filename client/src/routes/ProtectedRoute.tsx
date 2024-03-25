import { Navigate, Route } from 'react-router-dom';
import { ReactElement } from 'react';

interface ProtectedRouteProps {
  element: ReactElement;
  isAuthenticated: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  element,
  isAuthenticated,
  ...rest
}) => {
  return isAuthenticated ? (
    <Navigate to="/signIn" />
  ) : (
    <Route {...rest} element={element} />
  );
};

export default ProtectedRoute;
