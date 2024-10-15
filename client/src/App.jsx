import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { About } from './pages/About';
import { Profile } from './pages/Profile';

export default function App() {
  return (
    <BrowserRouter>
      <div className='bg-slate-200'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
          <h1 className='font-bold'><a href='/'>Auth App</a></h1>
          <ul className='flex gap-4'>
            <li><a href='/'>Home</a></li>
            <li><a href='/sign-in'>Sign In</a></li>
            <li><a href='/about'>About</a></li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
