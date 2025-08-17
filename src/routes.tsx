import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import { type ReactNode } from 'react';

import Header from './components/Header';

import Home from './pages/Home';
import Filme from './pages/Filme';
import Erro from './pages/Erro';
import Favoritos from './pages/Favoritos';

function RoutesApp() {
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/filme/:id' element={<Filme />}></Route>
                <Route path='/favoritos' element={<Favoritos />}></Route>
                <Route path='*' element={<Erro />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;