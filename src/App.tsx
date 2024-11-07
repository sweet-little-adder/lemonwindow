import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Quote from "./components/Quote";
import AboutUs from "./components/AboutUs";

function App() {
    const [quote, setQuote] = useState<boolean>(false);
    const [page, setPage] = useState<string>("about us");
    return (
        <div className="w-full h-full flex-col flex-wrap justify-center items-center">
            <Header setQuote={setQuote} setPage={setPage} quote={quote} />

            {quote && <Quote setQuote={setQuote} />}
            <div className="z-10 mt-24 mx-auto  w-full h-fit flex justify-center text-4xl">
                {page === "services" && (
                    <div className="flex-col items-center text-[#555555]">
                        <b className="bg-[#555] text-[#fff9ec]  p-2 pt-4 rounded-lg/">
                            Residential / Commercial
                        </b>
                        <br />
                        <br />
                        <div className="flex flex-wrap sm:gap-9 mx-auto/ justify-center sm:space-y-0 space-y-20 h-fit">
                            <div className="space-y-6">
                                <u>Exterior</u>
                                <br />
                                <p>window cleaning</p>
                                <p>house wash</p>
                                <p>roof wash</p>
                                <p>guttercleaning</p>
                            </div>
                            <div className="space-y-6">
                                <u>Interior</u>
                                <br />
                                <p>carpet cleaning</p>
                                <p>tile and grout</p>
                            </div>
                        </div>
                    </div>
                )}
                {page === "about us" && <AboutUs />}
                {page === "locations" && (
                    <div className="flex-col space-y-6 font-sans/ /text-[#ff0069] text-/xl">
                        <u>Service areas</u>
                        <br />
                        <p>- Northern Virginia -</p>
                        <p>- Maryland -</p>
                        <p>- Washington DC -</p>
                    </div>
                )}
            </div>
            {/* footer */}
            <div className="flex mx-auto font-sans mt-20 text-xs sm:mt-20 left-1/2/ -translate-x-1/2/  bottom-0/  w-screen h-fit justify-center items-end pb-5">
                Copyright © 2024 Lemon Windows - All Rights Reserved.
            </div>
        </div>
    );
}

export default App;
