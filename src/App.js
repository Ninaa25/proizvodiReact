import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Create from './strane/Create';
import Pocetna from './strane/Pocetna';
import Message from './strane/Message';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Pocetna />} />
          <Route path="/create" element={<Create />} />
          <Route path="/message" element={<Message />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
