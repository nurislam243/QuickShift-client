import React from 'react';
import { useForm } from 'react-hook-form';

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
                    <input type="email" className="input" placeholder="Email"
                    {...register('email')} />
                    <label className="label">Password</label>
                    <input 
                    type="password" className="input" placeholder="Password" 
                    {...register('password', {required: true, minLength: 6})}/>
                    {
                        errors.password?.type === 'required' && <p className='text-error'>Password is required</p>
                    }
                    {
                        errors.password?.type==='minLength' && <p className='text-error'>Password Must be 6 character or longer</p>
                    }

                    <div><a className="link link-hover">Forgot password?</a></div>

                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
            </form>
        </div>
    );
};

export default Login;