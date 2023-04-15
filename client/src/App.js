import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import NavbarN from './components/NavbarN/NavbarN';
import AllRoutes from './AllRoutes';
function App() {
  return (
    <div className="App">
    <Router>
    <NavbarN />
    <AllRoutes />
    </Router>
    </div>
  );
}

export default App;
