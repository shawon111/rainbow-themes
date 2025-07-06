'use client'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
// @ts-ignore
import CircleType from 'circletype';
import playIcon from '@/assets/images/play-Icon.png'
import Image from 'next/image';

const CircleText = () => {
    const textRef = useRef(null);

    useEffect(() => {
        const circleType = new CircleType(textRef.current);
        circleType.radius(120);

        // gsap rotation animation
        gsap.to(textRef.current, {
            rotation: 360,
            duration: 10,
            ease: 'linear',
            repeat: -1,
        });
    }, []);
    return (
        <div className='absolute top-0 right-0'>
            <div className="flex justify-center items-center h-screen relative">
                {/* Circular Text */}
                <p
                    ref={textRef}
                    className="absolute text-xl font-semibold uppercase tracking-wider text-center w-[300px]"
                >
                    watch video - watch video -
                </p>

                {/* play Button */}
                <Image
                    src={playIcon}
                    alt='play icon'
                    width={60}
                    height={60}
                    className='relative z-10'
                />
            </div>
        </div>
    );
};

export default CircleText;