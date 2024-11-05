import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Quote from "./components/Quote";

function App() {
    const [quote, setQuote] = useState<boolean>(false);
    const [page, setPage] = useState<string>("about");
    return (
        <div className="w-full h-full flex-col justify-center items-start">
            <Header setQuote={setQuote} setPage={setPage} quote={quote} />

            {quote && <Quote setQuote={setQuote} />}
            <div className="z-10 mt-12 mx-auto w-full flex justify-center">
                {page === "services" && (
                    <div className="flex ">
                        Exterior: -window cleaning -house wash -roof wash
                        -guttercleaning Interior: -carpet cleaning -tile and
                        grout
                    </div>
                )}
                {page === "about us" && (
                    <div className="relative mt-9 mx-auto flex justify-center">
                        <div
                            className="absolute z-10 space-y-12 font-bold text-[#ffefee]/ text-white /text-[#999999] text-4xl text-center font-lemonada text-stroke/   
                        drop-shadow-[3.5px_2px_0px_rgba(200,299,299,1)] drop-shadow-md"
                        >
                            <p className="flex items-center justify-center text-5xl mb-[-20px]">
                                #<h1>1</h1>
                            </p>
                            Cleaning
                            <br /> Agency
                        </div>
                        <div className="z-0 absolute w-[260px] h-[260px] bg-[#ffffcc]/25 rounded-full border-[#ffcccc]/50 border-[40px]"></div>
                    </div>
                )}
                {page === "locations" && (
                    <div className="flex text-[#ff0069]">DMV area DC</div>
                )}
            </div>
            <div className="z-[-1] font-sans text-xs absolute left-1/2 -translate-x-1/2 bottom-0  flex h-full justify-center items-end pb-5">
                Copyright © 2024 Lemon Windows - All Rights Reserved.
            </div>
        </div>
    );
}

export default App;
