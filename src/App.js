import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Quality from './components/Quality';
import Project from './components/Project';
import Skills from './components/Skills';
import Contact from './components/Contact';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Lang from './components/Lang';
import {Mode} from './components/Mode'


function App() {
  // const [dark,setDark] = useState("white")
  // const [color,setColor] = useState("black")
  // const handleDarkMode=()=>{
  //   if(dark==="white"){
  //     setDark("grey")
  //     document.body.style.backgroundColor="grey"
  //     setColor("white")
  //   }else{
  //     setDark("white")
  //     document.body.style.backgroundColor="white"
  //     setColor("black")
  
  //   }
  //  }
  return (
    <div className="container">
      <Mode/>
      <BrowserRouter> 
      <Routes>
        <Route path='/' element={<Navbar title="Goru2k18"/>}>
        <Route index element={<Home />}/>
        

        <Route path='/about' element={<Quality/>}/>
        <Route path='/services' element={<Lang/>}/>
        <Route path='/hire' element={<Skills/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/project' element={<Project/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
     



    </div>
  );
}

export default App;
