import React, { useEffect, useState } from 'react';

import "./variables.css";
import News from './components/News/News';
import { Router, Routes } from 'react-router-dom';
import PublicRoutes from './router/Public';

function App() {


  return (
    <>
           <PublicRoutes />


    </>
  );
}

export default App;
