import menuIcon from '@/assets/images/icons/menuIcon.svg'
import cartIcon from '@/assets/images/icons/cart.svg'
import searchIcon from '@/assets/images/icons/search.svg'
import Image from 'next/image';
import HeaderNavigation from './HeaderNavigation';
import Button from '../ui/Button';

const HeaderBottom = () => {
    return (
        <div className='border-b border-[#5163FF]/10 pb-[13px]'>
            <div className="flex items-center justify-between">
                {/* search and cart */}
                <div>
                    <ul className='flex items-center gap-[15px]'>
                        {/* menu icon */}
                        <li className='flex items-center gap-[7px]'>
                            <span>
                                <Image
                                src={menuIcon}
                                alt='menu icon'
                                width={20}
                                height={20}
                                />
                            </span>
                        </li>
                        {/* separator */}
                        <li className='h-[20px] w-[1px] bg-[#2A303D26]'></li>
                        {/* cart icon */}
                        <li className='flex items-center gap-[7px]'>
                            <span>
                                <Image 
                                src={cartIcon}
                                alt='cart icon'
                                width={20}
                                height={18.18}
                                />
                            </span>
                        </li>
                        {/* separator */}
                        <li className='h-[20px] w-[1px] bg-[#2A303D26]'></li>
                        {/* search icon */}
                        <li className='flex items-center gap-[7px]'>
                            <span>
                                <Image 
                                src={searchIcon}
                                alt='cart icon'
                                width={18}
                                height={18}
                                />
                            </span>
                        </li>
                    </ul>
                </div>
                {/* navigation */}
                <div>
                    <HeaderNavigation />
                </div>
                {/* cta btn */}
                <div>
                    <Button classNames='px-[20px] py-[12px] text-sm'>
                        Get a free quote
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default HeaderBottom;