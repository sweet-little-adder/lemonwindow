import "../App.css";
function Header() {
    return (
        <div className="mx-auto bg-[#FFF9EC]/80 w-screen h-[380px] bg-noise text-4xl pt-20">
            <div>
                <div className="mb-6 pt-7 font-streetwear text-[128px] text-[#FFE600] drop-shadow!">
                    Lemon
                </div>
                Window Cleaning
            </div>
            <div className="flex justify-around items-center w-screen text-[36px] mt-12">
                <div>Service</div>
                <div>About</div>
                <div>Locations</div>
            </div>
            <button className="text-[48px] mt-8">GET A QUOTE</button>
        </div>
    );
}
export default Header;
