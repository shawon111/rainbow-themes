import React from 'react';
import Counter from './Counter';

const FunFact = () => {
    return (
        <div className='mt-[100px]'>
            <div className='flex items-center gap-[90px]'>
                <div className='border-t-2 border-[#00234B] hover:border-[#5163FF] w-full'>
                    <div className='font-[600] text-[80px] leading-[50px] tracking-[-0.02em] text-[#00234B] mt-[30px] mb-[20px]'>
                        <Counter value={99} />
                        <span className='text-[50px] font-[400]'>%</span>
                    </div>
                    <p className='font-[400] text-base text-[#00234B] leading-[100%]'>
                        Business Strategy
                    </p>
                </div>
                <div className='border-t-2 border-[#00234B] hover:border-[#5163FF] w-full'>
                    <div className='font-[600] text-[80px] leading-[50px] tracking-[-0.02em] text-[#00234B] mt-[30px] mb-[20px]'>
                        <Counter value={80} />
                        <span className='text-[50px] font-[400]'>%</span>
                    </div>
                    <p className='font-[400] text-base text-[#00234B] leading-[100%]'>
                        Targeted Acquisition
                    </p>
                </div>
                <div className='border-t-2 border-[#00234B] hover:border-[#5163FF] w-full'>
                    <div className='font-[600] text-[80px] leading-[50px] tracking-[-0.02em] text-[#00234B] mt-[30px] mb-[20px]'>
                        <Counter value={62} />k
                        <span className='text-[50px] font-[400]'>+</span>
                    </div>
                    <p className='font-[400] text-base text-[#00234B] leading-[100%]'>
                        Complete Projects
                    </p>
                </div>
                <div className='border-t-2 border-[#00234B] hover:border-[#5163FF] w-full'>
                    <div className='font-[600] text-[80px] leading-[50px] tracking-[-0.02em] text-[#00234B] mt-[30px] mb-[20px]'>
                        <Counter value={15} />k
                        <span className='text-[50px] font-[400]'>+</span>
                    </div>
                    <p className='font-[400] text-base text-[#00234B] leading-[100%]'>
                        Happy Customers
                    </p>
                </div>
                <div className='border-t-2 border-[#00234B] hover:border-[#5163FF] w-full'>
                    <div className='font-[600] text-[80px] leading-[50px] tracking-[-0.02em] text-[#00234B] mt-[30px] mb-[20px]'>
                        <Counter value={100} />
                        <span className='text-[50px] font-[400]'>+</span>
                    </div>
                    <p className='font-[400] text-base text-[#00234B] leading-[100%]'>
                        Consultant Advisors
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FunFact;