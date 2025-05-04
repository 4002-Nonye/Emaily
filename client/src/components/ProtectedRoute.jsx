import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const { user, status } = useSelector((state) => state.auth);
  

  if (status === 'pending') return 'Loading';

  if (status !== 'pending' && !user) return <Navigate to='/' replace />;
  if (status === 'success' && user) return children;
}

export default ProtectedRoute;
