import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Create from './strane/Create';
import Pocetna from './strane/Pocetna';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Pocetna />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
