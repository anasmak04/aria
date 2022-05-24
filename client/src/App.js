import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'
import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home/Home';
import Design from './components/Design/Design';


function App() {
  return (
<div>
      {/* <Router>
      <Routes>
        <Route path="/" element={< Home/>}></Route>
   
      </Routes>
    </Router> */}

    <Home />
    </div>
  );
}

export default App;
