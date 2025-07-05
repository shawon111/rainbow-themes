import { cn } from "@/lib/utils";

interface ButtonProps {
    classNames?: string;
    children?: React.ReactNode;
}

const Button = ({classNames, children}: ButtonProps) => {
    return (
        <button className={cn("rounded-[10px] px-[40px] py-[16px] bg-[linear-gradient(0deg,#4C5DEF,#4C5DEF),radial-gradient(64.58%_59%_at_37.13%_12%,rgba(255,255,255,0.427)_0%,rgba(255,255,255,0)_69.79%,rgba(255,255,255,0)_100%)] shadow-[0px_10px_40.6px_0px_#5163FF54,_inset_-3px_-4px_7px_0px_#FFFFFF26] cursor-pointer", classNames)}>
            <span className="font-[600] text-lg text-white leading-[29px] tracking-[-1%] [text-shadow:1px_2px_1px_rgba(12,4,66,0.3)]">
                {children}
            </span>
        </button>
    );
};

export default Button;