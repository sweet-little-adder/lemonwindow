import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="w-screen justify-center items-center">
            <Header />
            <div className=""></div>

            <h1>Lemon Window</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    GET A QUOTE {count}
                </button>
            </div>
        </div>
    );
}

export default App;
