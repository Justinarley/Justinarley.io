import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profiles from './pages/profiles';
import ProfileJustin from './pages/profile-justin-altamirano';

function AppRouter () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Profiles />} />
        <Route path="/justin" element={<ProfileJustin />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;