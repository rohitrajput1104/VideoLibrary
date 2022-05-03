import "./App.css";
import {MyRoutes, Navbar, Sidebar} from './Components/ComponentsExport'
import {Toaster} from 'react-hot-toast'
function App() {
  return (
    <div className="App">
    
      <Sidebar />
       <MyRoutes />
       <Toaster />

        
    </div>
  );
}

export default App;
