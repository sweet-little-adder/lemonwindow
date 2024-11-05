import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Quote from "./components/Quote";
import AboutUs from "./components/AboutUs";

function App() {
    const [quote, setQuote] = useState<boolean>(false);
    const [page, setPage] = useState<string>("about us");
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
                {page === "about us" && <AboutUs />}
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
