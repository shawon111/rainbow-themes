import Container from '@/components/layout/Container';
import aboutImg2 from '@/assets/images/aboutimg1.png'
import aboutImg1 from '@/assets/images/aboutimg2.png'
import experienceImg from '@/assets/images/ComapnyExperience.png'
import dot from '@/assets/images/Dots.png'
import author from '@/assets/images/author.png'
import signature from '@/assets/images/signature.png'
import Image from 'next/image';
import SectionBadge from '@/components/ui/SectionBadge';
import SectionTitle from '@/components/ui/SectionTitle';
import Paragraph from '@/components/ui/Paragraph';
import Button from '@/components/ui/Button';
import Link from 'next/link';

const About = () => {
    return (
        <section className='pt-[140px] pb-[100px] bg-[url(/BgElement.png)] bg-no-repeat bg-[position:center_right]'>
            <Container>
                <div className='flex items-start gap-[78px]'>
                    <div className='w-[40%] relative'>
                        <div className='flex items-start gap-[24px]'>
                            <Image
                                src={aboutImg1}
                                alt='about image 1'
                                width={318}
                                height={540}
                            />
                            <Image
                                src={experienceImg}
                                alt='experience image'
                                width={214}
                                height={214}
                            />
                        </div>
                        <Image
                            src={aboutImg2}
                            alt='about image 2'
                            width={308}
                            height={360}
                            className='absolute bottom-[-50px] right-[-25px]'
                        />
                    </div>
                    <div className='w-[60%] pr-[210px]'>
                        <div>
                            <SectionBadge classNames='mb-[30px]'>
                                Know about us
                            </SectionBadge>
                            <SectionTitle>
                                All-in-one web solution
                                for your business
                            </SectionTitle>
                            <Paragraph classNames='mt-[16px]'>
                                We are creative agency, we are here to helping your business growth consectetur adipiscing.
                            </Paragraph>
                            <div className='mt-[25px] ml-[-13px]'>
                                <ul>
                                    <li className='flex items-start gap-[10px]'>
                                        <span>
                                            <Image
                                                src={dot}
                                                alt='dot icon'
                                                className='w-auto'
                                            />
                                        </span>
                                        <Paragraph classNames='mt-[5px]'>
                                            There are many variations of passages available
                                        </Paragraph>
                                    </li>
                                    <li className='flex items-start gap-[10px]'>
                                        <span>
                                            <Image
                                                src={dot}
                                                alt='dot icon'
                                                className='w-auto'
                                            />
                                        </span>
                                        <Paragraph classNames='mt-[5px]'>
                                            Majority have suffered alteration in some form
                                        </Paragraph>
                                    </li>
                                    <li className='flex items-start gap-[10px]'>
                                        <span>
                                            <Image
                                                src={dot}
                                                alt='dot icon'
                                                className='w-auto'
                                            />
                                        </span>
                                        <Paragraph classNames='mt-[5px]'>
                                            Contrary to popular belief is not simply random
                                        </Paragraph>
                                    </li>
                                </ul>
                            </div>
                            <div className='mt-[35px] flex items-center gap-[30px]'>
                                <div>
                                    <Link href="#">
                                        <Button>
                                            More about us
                                        </Button>
                                    </Link>
                                </div>
                                <div>
                                    <div className="flex items-center gap-[10px]">
                                        {/* contact icon box */}
                                        <div className='mt-[13px]'>
                                            <Image
                                                src={author}
                                                alt="phone icon"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-[9px]">
                                            <Image 
                                            src={signature}
                                            alt='author signature'
                                            width={123}
                                            height={18}
                                            />
                                            <div className='border-b border-[#00234B] opacity-[15%]'></div>
                                            <h5 className="text-[14px] font-[400] text-[#00234B] tracking-[0.02em] leading-[100%]">
                                                CEO at Company
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default About;