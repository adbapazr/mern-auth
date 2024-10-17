import { Link } from 'react-router-dom';

export const SignUp = () => {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form>
        <div className='flex flex-col gap-2'>
          <input type='text' placeholder='Username' className='border-2 bg-slate-100 border-gray-300 p-3 rounded-lg my-2' id='username'/>
          <input type='email' placeholder='Email' className='border-2 bg-slate-100 border-gray-300 p-3 rounded-lg my-2' id='email'/>
          <input type='password' placeholder='Password' className='border-2 bg-slate-100 border-gray-300 p-3 rounded-lg my-2' id='password'/>
          <button type='submit' className='bg-blue-500 text-white p-3 rounded-md my-2 hover:opacity-95 disabled:opacity-60 uppercase'>Sign Up</button>
        </div>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to='/sign-in'>
          <span className='text-blue-500'>Sign In</span>
        </Link>
      </div>
    </div>
  )
}
