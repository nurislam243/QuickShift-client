import React from 'react';
import { Outlet } from 'react-router';
import authImage from '../assets/authImage.png'
import QuickShiftLogo from '../pages/shared/QuickShiftLogo/QuickShiftLogo';

const AuthLayout = () => {
    return (
        <div>
            <div className="p-12 bg-base-200 max-w-[1536px] mx-auto min-h-screen">
                <div className="">
                    <QuickShiftLogo></QuickShiftLogo>
                </div>
                <div className="flex justify-center gap-[110px] flex-col lg:flex-row-reverse mt-[11]">
                    <div className="flex-1">
                        <img
                        src={authImage}
                        className=""
                        />
                    </div>
                    <div className='flex-1 mt-14'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;