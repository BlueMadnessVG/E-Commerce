import { BrowserRouter as Router } from 'react-router-dom'
import Loader from './components/Static/Loader/Loader'
import './App.css'

import { Suspense } from 'react'
import { AppRouter } from './Router/Router'
import Navbar from './components/Static/Navbar/Navbar'


function App() {

  return (
    <>
      <Navbar />

      <Router>
          <Suspense fallback={<Loader />}>
            <AppRouter />
          </Suspense>
      </Router> 
    </>
  )
}

export default App
