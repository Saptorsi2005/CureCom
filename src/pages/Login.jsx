import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase'; // Import Firebase authentication
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const [state, setState] = useState('Sign Up');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // Loading state for button
    const navigate = useNavigate(); // Hook for navigation

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        setError('');
        setLoading(true); // Show loading state

        try {
            if (state === "Sign Up") {
                await createUserWithEmailAndPassword(auth, email, password);
                alert("Account Created Successfully!");
            } else {
                await signInWithEmailAndPassword(auth, email, password);
                alert("Login Successful!");
            }
            
            navigate('/'); // Redirect to Home Page after successful login/signup
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false); // Hide loading state
        }
    };

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

                {/* Updated Button with Loading Effect */}
                <button 
                    className={`w-full py-2 rounded-md text-base mt-4 transition-all ${
                        loading 
                            ? 'bg-gray-400 cursor-not-allowed' 
                            : 'bg-green-500 text-white hover:bg-green-600'
                    }`}
                    type="submit"
                    onClick={onSubmitHandler}
                    disabled={loading}
                >
                    {loading ? "Processing..." : state === 'Sign Up' ? "Create Account" : "Login"}
                </button>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <p className='mt-4 text-sm'>
                    {state === "Sign Up" ? (
                        <>
                            Already have an account? 
                            <span 
                                onClick={() => setState('Login')} 
                                className='text-green-500 underline cursor-pointer'
                            >
                                Login here
                            </span>
                        </>
                    ) : (
                        <>
                            Don't have an account? 
                            <span 
                                onClick={() => setState('Sign Up')} 
                                className='text-green-500 underline cursor-pointer'
                            >
                                Sign up here
                            </span>
                        </>
                    )}
                </p>

                {state === "Sign Up" && (
                    <p>
                        Login as a Doctor? 
                        <span 
                            onClick={() => setState('Login')} 
                            className='text-green-500 underline cursor-pointer'
                        >
                            Click Here
                        </span>
                    </p>
                )}
            </div>
        </form>
    );
};

export default Login;
