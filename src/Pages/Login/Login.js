import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {

    const { register,formState: { errors }, handleSubmit } = useForm();

    const handleLogin = data => {
        console.log(data);
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className="text-4xl text-center mb-5">Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            {...register("email", { required: "Email is required" })}
                            type="email" className="input input-bordered w-full max-w-xs" />
                        <input />
                        {errors.email && <p role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            {...register("password", { required: "Password is required" })}
                            type="password" className="input input-bordered w-full max-w-xs" />
                        <input />
                    </div>
                    <input className='btn w-full' value='Login' type="submit" />
                
                </form>
                <p className='text-center my-5'>New to Buy & Sell? <Link className='text-emerald-200 underline' to='/register'>Create Account</Link></p>
                <div className="divider">OR</div>
                <button className='btn w-full my-2'>Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;