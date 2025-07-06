import Container from "@/components/layout/Container";
import Image from "next/image";
import rocketImg from '@/assets/images/Rocket-small.png'
import heroParticleOne from '@/assets/images/hero-particle-1.png';
import Paragraph from "@/components/ui/Paragraph";
import Button from "@/components/ui/Button";
import Link from "next/link";
import phoneIcon from '@/assets/images/Phome.png';
import client1 from '@/assets/images/client1.png';
import client2 from '@/assets/images/client2.png';
import client3 from '@/assets/images/client3.png';
import client4 from '@/assets/images/client4.png';
import plus from '@/assets/images/icons/plus.svg';
import bannerImg from '@/assets/images/banner-img.png';
import circleButton from '@/assets/images/circle-button.png';

const HeroSection = () => {
    return (
        <div className="hero-section pt-[100px] pb-[155px] relative overflow-hidden">
            <div className="relative">
                <Container>
                    <div>
                        {/* hero title */}
                        <h1 className="font-[600] text-[100px] leading-[100%] tracking-[-2px] text-[#00234B]">
                            <span className="flex items-center">
                                We shape the future
                                <Image
                                    src={heroParticleOne}
                                    alt="particle image"
                                    width={75}
                                    height={75}
                                    className="mt-[-75px]"
                                />
                            </span>
                            <span className="flex items-center">
                                of <span className="w-[fit-content] ml-[25px] flex items-center text-transparent bg-clip-text bg-[linear-gradient(90deg,#5163FF_12.38%,#C872F2_35.8%,#FE71B9_55.75%)]">business
                                    <Image
                                        src={rocketImg}
                                        width={92}
                                        height={92}
                                        alt="rocket image"
                                        className="inline-block mt-[20px]"
                                    />
                                </span>
                            </span>
                        </h1>
                        <div className="mt-[25px]">
                            <Paragraph classNames="mb-[50px]">
                                A business consultant is a professional who provides expert advice<br /> and guidance to businesses on various aspects such.
                            </Paragraph>
                            <div className="flex items-center gap-[30px]">
                                <div>
                                    {/* cta button */}
                                    <Link href="#">
                                        <Button>
                                            Explore more
                                        </Button>
                                    </Link>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    {/* contact icon box */}
                                    <div>
                                        <Image
                                            src={phoneIcon}
                                            alt="phone icon"
                                            width={50}
                                            height={50}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-[10px]">
                                        <p className="text-[13px] leading-[100%] text-[#838A95]">
                                            Free Consultant
                                        </p>
                                        <h5 className="text-[17px] font-[500] text-[#00234B] leading-[100%]">
                                            (406) 555-0120
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* client stisfaction */}
                        <div className="mt-[60px]">
                            <div className="flex items-center gap-[20px]">
                                {/* client images */}
                                <div className="flex items-center">
                                    <Image
                                        src={client1}
                                        alt="client 1 image"
                                        width={55}
                                        height={55}
                                        className="z-0"
                                    />
                                    <Image
                                        src={client2}
                                        alt="client 2 image"
                                        width={55}
                                        height={55}
                                        className="z-1 ml-[-21px]"
                                    />
                                    <Image
                                        src={client3}
                                        alt="client 3 image"
                                        width={55}
                                        height={55}
                                        className="z-2 ml-[-21px]"
                                    />
                                    <div className="w-[55px] z-3 ml-[-21px] relative">
                                        <Image
                                            src={client4}
                                            alt="client 4 image"
                                            width={55}
                                            height={55}
                                        />
                                        <div className="absolute top-0 left-0 flex items-center justify-center w-[55px] h-[55px] bg-[#FE71B9]/80 rounded-full border-2 border-white">
                                            <Image
                                                src={plus}
                                                alt="plus icon"
                                                width={14}
                                                height={14}
                                                className="z-5"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* number of clients */}
                                <div>
                                    <p className="text-base leading-6 text-[#838A95]">
                                        <span className="font-[600] text-[#5163FF]">2.5K+</span> Business Peoples<br />
                                        Already Registered
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
                {/* watch videobutton */}
                <Image
                    src={circleButton}
                    alt="circular button"
                    width={175}
                    height={175}
                    className="absolute right-[390px] top-[35px] animate-[spin_10s_linear_infinite]"
                />
            </div>
            {/* banner image */}
            <Image
                src={bannerImg}
                alt="banner image"
                width={1135}
                height={605}
                className="absolute right-[-30px] bottom-[-70px]"
            />
        </div>
    );
};

export default HeroSection;