import { useState } from "react";

import "./App.css";

function App() {
    const [count, setCount] = useState("$");

    return (
        <>
            <div className=""></div>
            <h1>Lemon Window</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    GET A QUOTE {count}
                </button>
            </div>
        </>
    );
}

export default App;
