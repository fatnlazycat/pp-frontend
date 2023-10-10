import { useRoutes } from 'react-router-dom';
import Home from './Home';

const Routes = () => useRoutes([
  {
    path: '/',
    element: <Home />,
  },
]);

export default Routes;