import Navbar from "./components/nav";
import {Routes,Route} from 'react-router-dom';
import Add from './components/Add'
import Home from "./components/Home";
import Edit from "./components/Edit";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/add" element={<Add />}></Route>
        <Route exact path="/edit/:id" element={<Edit />}></Route>
      </Routes>
      </div>
    
  );
}

export default App;
