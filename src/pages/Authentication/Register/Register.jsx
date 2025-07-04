import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router';

const Register = () => {
    const { createUser } = useAuth();
     const { handleSubmit, register, formState: { errors } } = useForm();
     

     const onSubmit = data => {
        console.log(data);
        console.log(createUser);
        createUser(data.email, data.password)
        .then( result =>{
            console.log(result.user)
        })
        .catch(error => {
            console.error(error)
        })
     }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="fieldset">
                    {/* email field */}
                    <label className="label">Email</label>
                    <input 
                        type="email" 
                        {...register('email')}
                        className="input w-full" 
                        placeholder="Email" 
                    />


                    {/* password field */}
                    <label className="label">Password</label>
                    <input 
                        type="password" 
                        {...register('password')}
                        className="input w-full" 
                        placeholder="Password" 
                    />
                    
                    <button className="btn btn-primary text-black mt-4">Register</button>
                </fieldset>
                <p><small>Already have an account? <Link to={'/login'} className='btn btn-link'>Login</Link></small></p>
            </form>
        </div>
    );
};

export default Register;