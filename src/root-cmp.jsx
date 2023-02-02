//? Libraries
import React from 'react'
import { Routes, Route } from 'react-router'
//? Components
import { Home } from './pages/home'

export function RootCmp() {
  return (
    <div className="main-layout app">
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </div>
  )
}
