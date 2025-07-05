import React from 'react';

const HeaderNavigation = () => {
    return (
        <nav>
            <ul className='flex items-center gap-9'>
                <li>
                    <a className='font-[500] text-base leading-4 text-[#838a95] hover:text-[#5163FF] transition-colors' href="#">Home</a>
                </li>
                <li>
                    <a className='font-[500] text-base leading-4 text-[#838a95] hover:text-[#5163FF] transition-colors' href="#">About</a>
                </li>
                <li>
                    <a className='font-[500] text-base leading-4 text-[#838a95] hover:text-[#5163FF] transition-colors' href="#">Services</a>
                </li>
                <li>
                    <a className='font-[500] text-base leading-4 text-[#838a95] hover:text-[#5163FF] transition-colors' href="#">Pages</a>
                </li>
                <li>
                    <a className='font-[500] text-base leading-4 text-[#838a95] hover:text-[#5163FF] transition-colors' href="#">News</a>
                </li>
                <li>
                    <a className='font-[500] text-base leading-4 text-[#838a95] hover:text-[#5163FF] transition-colors' href="#">Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default HeaderNavigation;