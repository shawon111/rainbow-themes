import { cn } from "@/lib/utils";

interface ParagraphProps {
    classNames?: string;
    children?: React.ReactNode;
}

const Paragraph = ({ classNames, children }: ParagraphProps) => {
    return (
        <p className={cn("text-lg leading-[32px] text-[#838A95] font-[400] opacity-90", classNames)}>
            {
                children
            }
        </p>
    );
};

export default Paragraph;