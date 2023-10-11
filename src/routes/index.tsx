import { useRoutes } from 'react-router-dom';
import Home from './Home';

const Routes = (): JSX.Element =>
  useRoutes([
    {
      path: '/',
      element: <Home />,
    },
  ]);

export default Routes;
