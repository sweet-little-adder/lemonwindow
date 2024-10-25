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
                <div className="cursor-pointer transition-all hover:drop-shadow-[0_6px_10px_rgba(0,0,0,0.25)]">
                    Service
                </div>
                <div className="cursor-pointer transition-all hover:drop-shadow-[0_6px_10px_rgba(0,0,0,0.25)]">
                    About
                </div>
                <div className="cursor-pointer transition-all hover:drop-shadow-[0_6px_10px_rgba(0,0,0,0.25)]">
                    Locations
                </div>
            </div>
            <button
                onClick={() => setQuote(!quote)}
                className=" md:text-[48px] mt-8 transition-all hover:drop-shadow-[0_6px_10px_rgba(255,0,170,0.25)]"
            >
                GET A QUOTE
            </button>
        </div>
    );
};
export default Header;
