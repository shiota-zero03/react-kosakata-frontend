import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeRouter from './routes/HomeRoutes';
import Custom404 from './views/errors/404';

function Routers() {
  return (
    <Router>
      <Routes>
        {HomeRouter.map((item, index) => (
            <Route
                key={index}
                path={item.path}
                element={item.element}
            />
        ))}
        <Route path='*' element={<Custom404 />} />
      </Routes>
    </Router>
  );
}

export default Routers;
