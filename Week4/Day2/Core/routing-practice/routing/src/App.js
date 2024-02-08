import './App.css';
import Home from './components/Home';
import ParamsComponent from './components/ParamsComponent';
import {Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        {/* /home is a "hard path". There aren't params in the route. */}
        <Route  path="/home" element={<Home />}/>
        {/* We have two potential routes/paths  for the ParamsComponent */}
        <Route  path="/:word" element={<ParamsComponent />}/>
        {/* These values (params) can be destructured from the useParam hook and used as variables, 
        just like values destructured from props! */}
        <Route  path="/:word/:color/:bgCol" element={<ParamsComponent />}/>
      </Routes>
    </div>
  );
}

export default App;