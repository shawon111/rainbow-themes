import { cn } from "@/lib/utils";

interface SectionTitleProps {
    children?: React.ReactNode;
    classNames?: string;
}

const SectionTitle = ({ children, classNames }: SectionTitleProps) => {
    return (
        <h2 className={cn("font-[600] text-[48px] leading-[60px] tracking-[-1%] text-[#00234B]", classNames)}>
            {
                children
            }
        </h2>
    );
};

export default SectionTitle;