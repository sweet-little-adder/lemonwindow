import "../App.css";
function Header() {
    return (
        <div className="mx-auto bg-[#FFF9EC]/80 w-screen h-[380px] bg-noise text-4xl">
            <div>
                <div className="mb-3 pt-7 font-streetwear text-[128px] text-[#FFE600] drop-shadow!">
                    Lemon
                </div>
                Window Cleaning
            </div>
            <div className="flex justify-around items-center w-screen">
                <div>Service</div>
                <div>About</div>
                <div>Locations</div>
            </div>
        </div>
    );
}
export default Header;
