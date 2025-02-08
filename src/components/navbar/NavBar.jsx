import logo from "../../assets/images/logo.png";
const NavBar = () => {
    return (
        <div className="bg-[#0a1728] p-5">
            <div className="w-full flex justify-center items-center">
                <img className="h-[50px] md:h-[70px]" src={logo} alt="" />
            </div>
        </div>
    );
};

export default NavBar;
