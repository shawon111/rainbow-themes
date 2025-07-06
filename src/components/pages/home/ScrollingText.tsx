import Image from 'next/image';
import union from '@/assets/images/union.png'
import union2 from '@/assets/images/Union2.png'
import star4 from '@/assets/images/Star4.png'

const ScrollingText = () => {
    return (
        <div className="overflow-hidden whitespace-nowrap text-white w-full">
            <div
                className="inline-block animate-marquee text-[62px] font-[700] tracking-tighter uppercase outlined-text"
                style={{ whiteSpace: 'nowrap' }}
            >
                <Image src={star4} alt="star" width={46} className='inline h-[46px]' /> Creative <Image src={union2} alt="star" width={46} className='inline h-[46px]' /> Solutions <Image src={star4} alt="star" width={46} className='inline h-[46px]' /> Expert Guidance <Image src={union} alt="star" width={46} className='inline h-[46px]' /> Consulting <Image src={star4} alt="star" width={46} className='inline h-[46px]' /> Creative <Image src={union2} alt="star" width={46} className='inline h-[46px]' /> Solutions <Image src={star4} alt="star" width={46} className='inline h-[46px]' /> Expert Guidance <Image src={union} alt="star" width={46} className='inline h-[46px]' /> Consulting 
                <Image src={star4} alt="star" width={46} className='inline h-[46px]' /> Creative <Image src={union2} alt="star" width={46} className='inline h-[46px]' /> Solutions <Image src={star4} alt="star" width={46} className='inline h-[46px]' /> Expert Guidance <Image src={union} alt="star" width={46} className='inline h-[46px]' /> Consulting <Image src={star4} alt="star" width={46} className='inline h-[46px]' /> Creative <Image src={union2} alt="star" width={46} className='inline h-[46px]' /> Solutions <Image src={star4} alt="star" width={46} className='inline h-[46px]' /> Expert Guidance <Image src={union} alt="star" width={46} className='inline h-[46px]' /> Consulting <Image src={star4} alt="star" width={46} className='inline h-[46px]' />
            </div>
        </div>
    );
};

export default ScrollingText;