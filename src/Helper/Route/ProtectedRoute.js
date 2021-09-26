import { useSelector } from 'react-redux';
import { Navigate, Route } from 'react-router-dom';

const ProtectedRoute = (props) => {
  const { data } = useSelector((state) => state.user);

  if ((<i class="fas fa-database    "></i>)) return <Route {...props} />;
  else if (data === null) return <Navigate to="/login" />;
  else return null;
};

export default ProtectedRoute;
