import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const {register, handleSubmit, formState: { errors }} = useForm();

    const onSubmit = data =>{
        console.log(data);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input w-full" placeholder="Email"
                    {...register('email', {required: true})} />
                    {
                        errors.email?.type === 'required' && <p className='text-error'>Email is required</p>
                    }

                    <label className="label">Password</label>
                    <input 
                    type="password" className="input w-full" placeholder="Password" 
                    {...register('password', {required: true, minLength: 6})}/>
                    {
                        errors.password?.type === 'required' && <p className='text-error'>Password is required</p>
                    }
                    {
                        errors.password?.type==='minLength' && <p className='text-error'>Password Must be 6 character or longer</p>
                    }

                    <div><a className="link link-hover">Forgot password?</a></div>

                    <button className="btn btn-primary text-black mt-4">Login</button>
                    <p><small>New to this website <Link to={'/register'}  className='btn btn-link'>Register</Link> </small></p>
                </fieldset>
            </form>
            <div className="flex justify-center mb-2.5">
                <p>OR</p>
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;