import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading/Loading';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { loginUser, loading } = useContext(AuthContext);
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    // if(loading){
    //     return <Loading></Loading>
    // }

    const handleLogin = data => {
        console.log(data);

        loginUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);

                setLoginUserEmail(data.email)

            })
            .catch(error => console.log(error))
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

                        {errors.email && <p className='text-error' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            {...register("password", { required: "Password is required" })}
                            type="password" className="input input-bordered w-full max-w-xs" />

                        {errors.password && <p className='text-error' role="alert">{errors.password?.message}</p>}
                    </div>
                    <input className='btn w-full mt-6' value='Login' type="submit" />

                </form>
                <p className='text-center my-5'>New to Buy & Sell? <Link className='text-emerald-200 underline' to='/register'>Create Account</Link></p>
                <div className="divider">OR</div>
                <button className='btn w-full my-2'>Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;