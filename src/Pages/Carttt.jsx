import React from 'react';
import { SiGnuprivacyguard } from "react-icons/si";
import { FcCollaboration } from "react-icons/fc";
import { MdSelfImprovement } from "react-icons/md";




const Carttt = () => {
    return (
        <div>
            <div className='text-center'>
                <h1>MENTORING FLOW</h1>
                <h1 className='font-bold text-2xl'>How does it works?</h1>
            </div>
            <div className='grid md:grid-cols-3 gap-4'>

                <div className="card  p-5 bg-base-100 shadow-xl my-4">
                    <div className="card-body text-center">
                        <h2 className="card-title"><SiGnuprivacyguard className='text-2xl text-center mx-auto'></SiGnuprivacyguard></h2>
                        <p className='font-bold'>Sign up</p>
                        <p className="text-gray-600">
                            Create an account to access our mentoring platform and unlock
                            exclusive features.
                        </p>
                    </div>
                </div>
                <div className="card    p-5 bg-base-100 shadow-xl my-4">
                    <div className="card-body text-center">
                        <h2 className="card-title"><FcCollaboration className='text-2xl text-center mx-auto'></FcCollaboration></h2>
                        <p className='font-bold'>Collaborate</p>
                        <p className="text-gray-600">
                        collaborate with The team will collaborate with colleagues at another lab who conduct related research.
                        </p>
                    </div>
                </div>
                <div className="card    p-5 bg-base-100 shadow-xl my-4">
                    <div className="card-body text-center">
                        <h2 className="card-title"><MdSelfImprovement className='text-center text-2xl mx-auto'></MdSelfImprovement></h2>
                        <p className='font-bold'>Improve</p>
                        <p className="text-gray-600">
                        IMPROVE and BETTER are general and interchangeable and apply to what can be made better whether it is good or bad.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carttt;