import  { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/header/Header";
import Preloader from "./components/Preloader/Preloader";
import Main_body from "./components/main_body/Main_body";

const RouteChangeTracker = ({ setLoading }) => {
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 100); // Adjust loading time
    return () => clearTimeout(timer);
  }, [location, setLoading]);

  return null;
};

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <Router>
      <RouteChangeTracker setLoading={setLoading} />
      {loading && <Preloader />}
      {!loading && <Header />}
      <Routes>
        <Route path="/" element={<Main_body />} />
      </Routes>
    </Router>
  );
}

export default App;
