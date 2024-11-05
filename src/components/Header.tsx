import React from "react";

// import "../App.css";
interface Props {
    setQuote: React.Dispatch<React.SetStateAction<boolean>>;
    quote: boolean;
    setPage: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<Props> = ({ quote, setQuote, setPage }) => {
    return (
        <div className="mx-auto z-50 bg-[#FFF9EC]/80 w-screen h-[380px] bg-noise md:text-3xl pt-9 ">
            <div className="cursor-default select-none">
                <div className="relative mb-[-1rem] pt-7 w-fit mx-auto font-streetwear text-5xl md:text-[128px] text-[#FFE600] drop-shadow! ">
                    <img
                        src="/logo_sparkle.png"
                        className="absolute top-[4.5rem] right-1/2 translate-x-1/2 md:top-1 md:right-[-4rem] w-16 md:w-[150px] drop-shadow-[2px_2px_2.5px_rgba(0,0,0,0.2)] filter invert/   brightness-130 sepia/ saturate-100/ hue-rotate-250/  "
                    />
                    Lemon
                </div>
                <p className="tracking-wider">Window Cleaning</p>
            </div>
            <div className="md:flex justify-around items-center w-2/3 mx-auto text-4xl space-y-2 md:space-y-0 md:text-[36px] mt-12">
                <div
                    className="cursor-pointer transition-all hover:underline"
                    onClick={() => setPage("services")}
                >
                    Services
                </div>
                <div
                    className="cursor-pointer transition-all hover:underline active:underline"
                    onClick={() => setPage("about us")}
                >
                    About Us
                </div>
                <div
                    className="cursor-pointer transition-all hover:underline"
                    onClick={() => setPage("locations")}
                >
                    Locations
                </div>
            </div>
            <button
                onClick={() => setQuote(!quote)}
                className="text-2xl md:text-3xl mt-8 transition-all hover:drop-shadow-[0_0px_10px_rgba(255,156,156,0.5)]"
            >
                GET A QUOTE
            </button>
        </div>
    );
};
export default Header;
