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
                <div className="relative mb-[-1rem] pt-7 w-fit mx-auto font-streetwear text-6xl md:text-[128px] text-[#FFE600] drop-shadow! ">
                    Lemon
                    {/* <img
                        src="/logo.svg"
                        className="absolute top-9 right-20 w-16 md:w-[80px] drop-shadow-[2px_2px_2.5px_rgba(0,0,0,0.3)] filter invert/   brightness-130 sepia/ saturate-100/ hue-rotate-250/  "
                    /> */}
                </div>
                <p className="tracking-wide">Window Cleaning</p>
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
                    onClick={() => setPage("about")}
                >
                    About
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
