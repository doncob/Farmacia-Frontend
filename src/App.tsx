import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from '../src/components/navbar/NavBar';
import Footer from './components/footer/Footer';
import FormularioCategoria from '../src/components/categorias/formularioCategoria/FormularioCategoria'
import DeletarCategoria from '../src/components/categorias/deletarcategoria/DeletarCategoria';
import ListaProdutos from './components/produtos/listaProdutos/ListaProdutos';
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>

      <BrowserRouter>
      <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categorias" element={<ListaCategorias/>} />
          <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
          <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
          <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
          <Route path="/listaprodutos" element={<ListaProdutos />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
  </>
  
  
  
  
    )
}
export default App;
