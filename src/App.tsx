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
                        Roof washing Gutter cleaning Window Cleaning Power
                        washing Car Tile Grout cleaning Carpet Cleaning
                    </div>
                )}
                {page === "about" && (
                    <>
                        <div
                            className="z-10  relative  font-bold text-white text-4xl text-center font-lemonada text-stroke/   
                        drop-shadow-[5px_5px_0px_rgba(41,215,226,0.4)] "
                        >
                            <p className="flex items-center justify-center">
                                #<h1>1</h1>
                            </p>
                            Cleaning
                            <br /> Agency
                        </div>{" "}
                        <div className="relative/ z-0 absolute w-60 h-60 bg-[#29D7E2]/10 rounded-full"></div>
                    </>
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
