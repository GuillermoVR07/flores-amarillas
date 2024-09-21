import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import RootSidebar from './components/Common/RootSidebar';
import FlorAmarilla from './pages/Flores-Amarillas/FlorAmarilla';
import Fotitos from './pages/Carrusel-Fotos/Fotitos';
import Carta from './pages/Carta/Carta';
import Despedida from './pages/Despedida/Despedida';

const App = () => {
  return (
    <Router>
      <div className='flex'>
        <RootSidebar />
        <div>
        <Routes>
              <Route path="/florcita" element={<FlorAmarilla />}/>
              <Route path="/fotitos" element={<Fotitos />}/>
              <Route path="/carta" element={<Carta />}/>
              <Route path="/despedida" element={<Despedida />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;