import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import {Sidebar} from './Components/Sidebar/Sidebar'
import {Home} from './Pages/Home/Home'

function App() {
  return (
    <div className="App">
       
        <Sidebar />
        <Home />

        
    </div>
  );
}

export default App;
