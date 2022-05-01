import "./App.css";
import {MyRoutes, Navbar, Sidebar} from './Components/ComponentsExport'

function App() {
  return (
    <div className="App">
    
      <Sidebar />
       <MyRoutes />

        
    </div>
  );
}

export default App;
