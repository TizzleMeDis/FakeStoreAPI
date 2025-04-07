import { Routes, Route } from 'react-router-dom';
import { HomePage, ProductListPage, ProductDetailsPage, NavigationBar, Footer } from './components/index';
import { useState, useEffect } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios'

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/product-list' element={<ProductListPage />} />
        <Route path='/product-details/:productId' element={<ProductDetailsPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
