import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from '../Components/Layout';
import Login from '../Pages/Login/index';
import Cadastro from '../Pages/Cadastro/index';
import Home from '../Pages/Home/index';
import ProtectedRoutes from '../Routes/ProtectedRoutes'

/*const Routering = () => {
  const isAuthenticated = userService.usuarioAutenticado();

  return ( 
    <Router>
      <Routes>
        <Route path="/login" element={ isAuthenticated ? <Navigate to="/home" /> : <Login /> } />
        <Route path="/cadastrar" element={ isAuthenticated ? <Navigate to="/home" /> : <Cadastro /> } />
        <Route path="/home" element={ isAuthenticated ? <Layout><Home /></Layout> : <Navigate to="/login" /> } />
        <Route path="/*" element={ isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/login" /> } />
      </Routes>
    </Router>
  );
}
 
export default Routering;*/

const Routering = () => {

  return ( 
    <Router>
      <Routes>
        <Route path="*" element={<Login/>} />
        <Route path="/cadastrar" element={<Cadastro/>} />         
        <Route path="/home" element={<ProtectedRoutes>
           <Layout><Home/></Layout>
           </ProtectedRoutes>}/>
      </Routes>
    </Router>
   );
}
 
export default Routering;



