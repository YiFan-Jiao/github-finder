import './style/reset.css';
import './style/index.css';
import Search from "./components/Search";
import User from './components/User';
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <>
    <Routes>
        <Route exact path='/github-finder' element={<Search></Search>}></Route>
        <Route exact path='/user/:username' element={<User></User>}></Route>
      </Routes>
    </>
  );
}

export default App;
