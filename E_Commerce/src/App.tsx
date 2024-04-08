import { BrowserRouter as Router } from 'react-router-dom'
import Loader from './components/Static/Loader/Loader'

import { Suspense } from 'react'
import { AppRouter } from './Router/Router'
import Navbar from './components/Static/Navbar/Navbar'


function App() {

  return (
    <>
    <main className='min-h-screen bg-gray-300/50 '>
        <Router>
            {/* PAGE NAVBAR */}
            <div className='border-b bg-slate-900 font-sans min-h-[60px] px-10 py-3 relative'>
              <Navbar />
            </div>

            {/* PAGE MAIN BODY */}
            <Suspense fallback={<Loader />}>
              <AppRouter />
            </Suspense>
        </Router> 
    
    </main>

    </>
  )
}

export default App
