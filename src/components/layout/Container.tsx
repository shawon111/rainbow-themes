import { cn } from "@/lib/utils";

interface ContainerProps {
    children?: React.ReactNode;
    classNames?: string;
}

const Container = ({ children, classNames }: ContainerProps) => {
    return (
        <div
            className={cn("w-full max-w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1140px] xl:max-w-[1365px] mx-auto px-4 md:px-0", classNames)}
        >
            {children}
        </div>
    );
};

export default Container;