import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Contact from './pages/Contact'
import RootLayout from './components/RootLayout'
import AddForm from './components/AddForm'
import UpdateForm from './components/UpdateForm'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/add-form' element={<AddForm />} />
          <Route path='/update-form/:id' element={<UpdateForm />} />
        </Route>



      </Routes>
    </div>
  )
}

export default App