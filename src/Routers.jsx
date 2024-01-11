import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeRouter from './routes/HomeRoutes';

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
      </Routes>
    </Router>
  );
}

export default Routers;
