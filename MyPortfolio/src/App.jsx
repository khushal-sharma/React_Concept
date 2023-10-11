
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Layout from './component/Layout'
import Navbar from './component/Navbar/Navbar'
import Intro from './component/Intro/Intro'
import About from './component/About/About'
import Skills from './component/Skills/Skills'
import Home from './component/Home/Home'
import Contact from './component/ContactForm/Contact'
import Projects from './component/Projects/Projects'
import Courses from './component/Courses/Courses'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      {/* <Route path='' element={<Intro/>}/>
      <Route path='' element={<Skills/>}/> */}
      <Route path='home' element={<Home/>}/>
     <Route path='Navbar' element={<Navbar/>}/>
     <Route path='intro' element={<Intro/>}/>
     {/* <Route path='skill' element={<Skills/>}/> */}
     <Route path='about' element={<About/>}/>
     <Route path='contact' element={<Contact/>}/>
     <Route path='project' element={<Projects/>}/>
     <Route path='courses' element={<Courses/>}/>
    </Route>
  )
)
function App() {
  return (
    <>
    <RouterProvider router={router}/>
   
    </>
  )
}

export default App
