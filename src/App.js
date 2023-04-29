import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Quality from './components/Quality';
// import Project from './components/Project';
import Skills from './components/Skills';
import Contact from './components/Contact';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Lang from './components/Lang';
// import Client from './components/Client';
// import Server from './components/Server';
// import Stack from './components/Stack';
// import All from './components/All';
function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar title="Goru2k18"/>}>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<Quality/>}/>
      <Route path='services' element={<Lang/>}/>
      <Route path='/hire' element={<Skills/>}/>
      <Route path='/contact' element={<Contact/>}/>

       
        </Route>
      </Routes>
      {/* <Routes>
        <Route index element={<All/>}/>
        <Route path='/client' element={<Client/>}/>
        <Route path='/server' element={<Server/>}/>
        <Route path='/stacked' element={<Stack/>}/>

          </Route>
      </Routes> */}
      
      </BrowserRouter>
     



    </div>
  );
}

export default App;
