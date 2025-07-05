import Container from "./Container";
import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";

const Header = () => {
    return (
        <div className="header bg-white">
            <Container>
                <div className="flex flex-col gap-[12px]">
                    {/* header top */}
                    <HeaderTop />
                    {/* header bottom */}
                    <HeaderBottom />
                </div>
            </Container>
        </div>
    );
};

export default Header;