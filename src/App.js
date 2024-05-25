import './App.css';
import Homepage from './Homepage';
import Main from './Main';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Main" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
