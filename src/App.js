import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from "./layout/navbar/navbar"
import Home from './components/home/home';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path='*' element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

