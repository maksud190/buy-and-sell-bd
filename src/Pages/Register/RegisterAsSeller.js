import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const RegisterAsSeller = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const location = useLocation();

    const [createdsellerEmail, setCreatedsellerEmail] = useState('')
    const [token] = useToken(createdsellerEmail);
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const handleSellerRegister = data => {
        console.log(data);

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                toast("User Created Successfully");
                console.log(user);
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email)

                    })
                    .catch(error => console.log(error))
            })
            .catch(error => console.log(error));
    }

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/sellers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {

                setCreatedsellerEmail(email)

            })
    }

    return (
        <div>
            <div className='h-[800px] flex justify-center items-center'>
                <div className='w-96 p-7'>
                    <h2 className="text-4xl text-center mb-5">Sign Up</h2>
                    <form onSubmit={handleSubmit(handleSellerRegister)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                {...register("name", { required: "Name is required" })}
                                type="text" className="input input-bordered w-full max-w-xs" />
                            <input />
                            {errors.name && <p className='text-error' role="alert">{errors.name?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                {...register("email", { required: "Email is required" })}
                                type="email" className="input input-bordered w-full max-w-xs" />
                            <input />
                            {errors.email && <p className='text-error' role="alert">{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                {...register("password", { required: "Password is required" })}
                                type="password" className="input input-bordered w-full max-w-xs" />
                            <input />
                            {errors.password && <p className='text-error' role="alert">{errors.password?.message}</p>}
                        </div>
                        <input className='btn w-full' value='Sign up' type="submit" />

                    </form>
                    <Link to='/register' className=''>Buyer Register</Link>
                    <p className='text-center my-5'><Link className='text-emerald-200 underline' to='/login'>Already have an account</Link></p>
                    <div className="divider">OR</div>
                    <button className='btn w-full my-2'>Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default RegisterAsSeller;