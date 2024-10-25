import React from "react";

import "../App.css";
interface Props {
    setQuote: React.Dispatch<React.SetStateAction<boolean>>;
    quote: boolean;
}

const Header: React.FC<Props> = ({ quote, setQuote }) => {
    return (
        <div className="mx-auto bg-[#FFF9EC]/80 w-screen h-[380px] bg-noise text-4xl pt-20 ">
            <div className="cursor-default select-none">
                <div className="mb-6 pt-7 font-streetwear text-[128px] text-[#FFE600] drop-shadow! ">
                    Lemon
                </div>
                Window Cleaning
            </div>
            <div className="flex justify-around items-center w-screen text-[36px] mt-12">
                <div className="cursor-pointer transition-all hover:underline">
                    Service
                </div>
                <div className="cursor-pointer transition-all hover:underline">
                    About
                </div>
                <div className="cursor-pointer transition-all hover:underline">
                    Locations
                </div>
            </div>
            <button
                onClick={() => setQuote(!quote)}
                className=" md:text-[48px] mt-8 transition-all hover:drop-shadow-[0_0px_10px_rgba(255,156,156,0.5)]"
            >
                GET A QUOTE
            </button>
        </div>
    );
};
export default Header;
