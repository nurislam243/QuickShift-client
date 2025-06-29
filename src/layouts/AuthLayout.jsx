import React from 'react';
import { Outlet } from 'react-router';
import authImage from '../assets/authImage.png'
import QuickShiftLogo from '../pages/shared/QuickShiftLogo/QuickShiftLogo';

const AuthLayout = () => {
    return (
        <div>
            <div className="p-12 bg-base-200">
                <div className="">
                    <QuickShiftLogo></QuickShiftLogo>
                </div>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="flex-1">
                        <img
                        src={authImage}
                        className=""
                        />
                    </div>
                    <div className='flex-1'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;