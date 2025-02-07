import React, { useState } from 'react'

const Login = () => {

    const [state, setState] = useState('Sign Up')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        // Add submit logic here
    }

    return (
        <form className='min-h-[80vh] flex justify-center items-center'>
            <div className='flex flex-col gap-4 m-auto items-start p-8 min-w-[340px] sm:min-w-[400px] border rounded-xl text-zinc-600 text-sm shadow-lg'>
                <p className='text-2xl font-semibold'>{state === 'Sign Up' ? "Create Account" : "Login"}</p>
                <p className='text-gray-500 mb-4'>Please {state === 'Sign Up' ? "sign up" : "login"} to book an appointment</p>
                
                {state === "Sign Up" && (
                    <div className='w-full'>
                        <label className='text-sm font-medium' htmlFor='name'>Full Name</label>
                        <input 
                            id='name'
                            className='border border-zinc-300 rounded w-full p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-primary'
                            type="text"
                            onChange={(e) => setName(e.target.value)} 
                            value={name}
                            required 
                        />
                    </div>
                )}

                <div className='w-full'>
                    <label className='text-sm font-medium' htmlFor='email'>Email</label>
                    <input 
                        id='email'
                        className='border border-zinc-300 rounded w-full p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-primary'
                        type="email" 
                        onChange={(e) => setEmail(e.target.value)} 
                        value={email} 
                        required 
                    />
                </div>
                
                <div className='w-full'>
                    <label className='text-sm font-medium' htmlFor='password'>Password</label>
                    <input 
                        id='password'
                        className='border border-zinc-300 rounded w-full p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-primary'
                        type="password" 
                        onChange={(e) => setPassword(e.target.value)} 
                        value={password} 
                        required 
                    />
                </div>
                
                <button 
                    className='bg-primary text-white w-full py-2 rounded-md text-base mt-4 hover:bg-primary-dark transition-all'
                    type="submit"
                    onClick={onSubmitHandler}
                >
                    {state === 'Sign Up' ? "Create Account" : "Login"}
                </button>

                <p className='mt-4 text-sm'>
                    {state === "Sign Up" ? (
                        <>
                            Already have an account? 
                            <span 
                                onClick={() => setState('Login')} 
                                className='text-primary underline cursor-pointer'
                            >
                                Login here
                            </span>
                        </>
                    ) : (
                        <>
                            Don't have an account? 
                            <span 
                                onClick={() => setState('Sign Up')} 
                                className='text-primary underline cursor-pointer'
                            >
                                Sign up here
                            </span>
                        </>
                    )}
                </p>
            </div>
        </form>
    )
}

export default Login
