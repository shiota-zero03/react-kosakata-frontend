import { useState, useEffect } from 'react';

import './App.scss';
import Routers from './Routers';
import LoadingPage from './components/LoadingPage';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <LoadingPage />
  ) : (
    <Routers />
  )
}
