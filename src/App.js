import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Pocetna from './strane/Pocetna';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Pocetna />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
