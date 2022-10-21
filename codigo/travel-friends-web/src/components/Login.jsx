import React from 'react';
import loginImage from '../asserts/login.png';
import logo from '../asserts/travelLogo.png';

export default function Login(){
return(
    <div className='grid grid-cols-1 sm:grid-cols-2  h-screen w-full '>
      <div className='hidden sm:block'>
      <img  className = 'w-full h-full object-cover' src={loginImage} alt=""/>
      </div>

      <div className='bg-indigo-700   flex flex-col justify-center'>
          <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
              <h2 className='text-4xl dark:text-white font-family:poppins  text-center'>LOGIN</h2>
              <div className='flex flex-col text-gray-400 py-2'>
                  <label>Email</label>
                  <input  className = ' rounded-lg bg-white mt-2 pt-2 focus:border-blue-500 focus:bg-white  focus:outline-none  'type="text"/>
              </div>
              <div className='flex flex-col text-gray-400 py-2'> 
                  <label>Senha</label>
                  <input  className = ' rounded-lg bg-white  mt-2 pt-2 focus:border-blue-500 focus:bg-white  focus:outline-none  ' type="password"/>
              </div>
              <div className='flex justify-between text-gray-400 py-2 '>
                  <p className='flex items-center'><input  className='mr-2'type="checkbox"/>Me lembrar da senha</p>
                  <p >Esqueci a senha</p>

              </div>

              <button className='w-full my-5 py-2 bg-yellow-400 shadow-lg shadow-yellow-400/50 hover:shadow-yellow-500/40 text-white font-semibold rounded-lg '>Entrar</button>
          </form>
      </div>




    </div>


)

}
