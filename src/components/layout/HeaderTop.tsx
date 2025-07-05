import Image from 'next/image';
import React from 'react';
import Map from '@/assets/images/icons/map.svg'
import Mail from '@/assets/images/icons/mail.svg'
import Globe from '@/assets/images/icons/globe.svg'
import Logo from '@/assets/images/rainbow_themes_logo.png'
import Fb from '@/assets/images/icons/Facbook.svg'
import X from '@/assets/images/icons/Twitter.svg'
import Insta from '@/assets/images/icons/Instagram.svg'
import Linkedin from '@/assets/images/icons/Linkdin.svg'
import Link from 'next/link';

const HeaderTop = () => {
    return (
        <div className='header-top mt-[20px]'>
            <div className='shadow-[inset_2.25px_-7px_44px_0px_#F1F3FF,inset_0px_20px_46px_0px_#F1F3FF] rounded-[10px]'>
                <div className='px-[30px] py-[19px]'>
                    <div className='flex items-center justify-between'>
                        {/* info */}
                        <div>
                            <ul className='flex items-center gap-[15px]'>
                                <li className='flex items-center gap-[7px]'>
                                    <span>
                                        <Image
                                            src={Map}
                                            alt="location icon"
                                            width={11}
                                            height={13.44}
                                        />
                                    </span>
                                    <span className='font-[500] text-sm text-[#838A95] leading-3.5'>
                                        15th Street, USA
                                    </span>
                                </li>
                                {/* separator */}
                                <li className='h-[20px] w-[1px] bg-[#2A303D26]'></li>
                                <li className='flex items-center gap-[7px]'>
                                    <span>
                                        <Image
                                            src={Mail}
                                            alt="email icon"
                                            width={14}
                                            height={12.5}
                                        />
                                    </span>
                                    <span className='font-[500] text-sm leading-3.5'>
                                        <a className='text-[#838A95]' href="mailto:support@gamil.com">support@gamil.com</a>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        {/* logo */}
                        <div>
                            <Image
                                src={Logo}
                                width={200}
                                height={32}
                                alt='Rainbow Themes Logo'
                            />
                        </div>
                        {/* social */}
                        <div>
                            <ul className='flex items-center gap-[15px]'>
                                {/* select lanuage */}
                                <li className='flex items-center gap-[8px]'>
                                    <span>
                                        <Image
                                            src={Globe}
                                            alt="earth icon"
                                            width={14}
                                            height={12.5}
                                        />
                                    </span>
                                    <div className="relative w-full max-w-xs">
                                        <select className='block w-full pr-8 text-[#838A95] text-sm focus:outline-none font-[500] appearance-none transition-colors duration-200' name="language" id="language">
                                            <option value="en">English</option>
                                            <option value="fr">French</option>
                                            <option value="bn">Bangla</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                                            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                </li>
                                {/* separator */}
                                <li className='h-[20px] w-[1px] bg-[#2A303D26]'></li>
                                {/* social media */}
                                <li>
                                    <div className='flex items-center gap-[14px]'>
                                        <Link href="#">
                                            <Image
                                            className='hover:'
                                                src={Fb}
                                                alt='Facebook icon'
                                                width={7}
                                                height={13.39}
                                            />
                                        </Link>
                                        <Link href="#">
                                            <Image
                                                src={X}
                                                alt='Twitter icon'
                                                width={12}
                                                height={11.61}
                                            />
                                        </Link>
                                        <Link href="#">
                                            <Image
                                                src={Insta}
                                                alt='Instagram icon'
                                                width={12}
                                                height={11.92}
                                            />
                                        </Link>
                                        <Link href="#">
                                            <Image
                                                src={Linkedin}
                                                alt='LinkedIn icon'
                                                width={13.6}
                                                height={13.51}
                                            />
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;