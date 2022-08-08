import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import ShowCase from './components/ShowCase';



function App() {
  return (
    <BrowserRouter>
      <div className="mt-0">
        <Navbar />
        <ShowCase />
      </div>
    </BrowserRouter>
  );
}

export default App;
