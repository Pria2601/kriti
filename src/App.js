import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
import PreviewPage from './pages/PreviewPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/PreviewPage" element={<PreviewPage />} />
      </Routes>
    </Router>
  );
}

export default App;
