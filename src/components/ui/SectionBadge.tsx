import { cn } from "@/lib/utils";
import Image from "next/image";
import badgeVector from "@/assets/images/badgeVector.png"; // Adjust the path as necessary

interface SectionbadgeProps {
    children?: React.ReactNode;
    classNames?: string;
}

const SectionBadge = ({ children, classNames } : SectionbadgeProps) => {
    return (
        <div className={cn("flex items-center justify-center gap-[6px] px-[14px] py-[6px] w-[fit-content] bg-gradient-to-r from-[#708BFD] to-[#FE71B9] shadow-[inset_0px_-14px_18.5px_0px_#FFFFFFC9,_inset_0px_-2px_4px_0px_#FFFFFF00] rounded-[48px]", classNames)}>
            <span>
                <Image 
                src={badgeVector}
                width={13}
                height={9.1}
                alt="badge vector icon"
                />
            </span>
            <span className="font-[500] text-sm text-white leading-[26px] tracking-[-1%]">
                {
                    children
                }
            </span>
        </div>
    );
};

export default SectionBadge;