import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import Logo from './components/logo'
import { Home, CreatePost } from './pages'

const App = () => {
  return (
    <BrowserRouter> 
      <header className='w-full flex justify-between itens-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
        <Link to='/' className='flex items-center'>
         
            <Logo 
              title='logo' 
              titleId='1'
              width="4em"
              height="4em"
            />
         
            <h1 className='text-[3rem] pl-3 drop-shadow-md'>ImagemBot</h1>
         
        </Link>
        <Link to='/create-post' className='font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md'>
          Create
        </Link>
      </header>
      <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe]'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/create-post' element={<CreatePost />}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App