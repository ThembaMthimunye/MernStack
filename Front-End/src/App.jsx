

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Createpage from './Pages/Createpage';
import Navbar from './Components/Navbar'; 
import EditProductPage from './Pages/EditProductPage';
import { useParams, useNavigate } from "react-router-dom";



function App() {
  // const { pid } = useParams();
  return (

    <Router> 
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<Createpage />} />
        <Route path={`/edit/:id`} element={<EditProductPage />} />
      </Routes>
    </Router>
    
  );
}

export default App;
