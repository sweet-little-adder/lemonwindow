import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Quote from "./components/Quote";

function App() {
    const [quote, setQuote] = useState<boolean>(false);
    return (
        <div className="w-full h-full flex-col justify-center">
            <div className="items-start sticky top-0">
                <Header setQuote={setQuote} quote={quote} />
            </div>
            {quote && <Quote setQuote={setQuote} />}
        </div>
    );
}

export default App;
