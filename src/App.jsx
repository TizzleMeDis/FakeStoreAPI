import { Routes, Route } from 'react-router-dom';
import {  NavigationBar, Footer } from './components/index';
import { HomePage, ProductListPage, ProductDetailsPage, NotFoundPage, SignIn, MensClothingPage, WomensClothingPage, JeweleryPage, ElectronicsPage, EditProductList } from './pages/index'
import { useState, useEffect } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios'

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products/collection' element={<ProductListPage />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/products/mens' element={<MensClothingPage />} />
        <Route path='/products/womens' element={<WomensClothingPage />} />
        <Route path='/products/electronics' element={<ElectronicsPage />} />
        <Route path='/products/jewelery' element={<JeweleryPage />} />
        <Route path='/products/edit-products' element={<EditProductList />} />
        <Route path='/product-details/:productId' element={<ProductDetailsPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
