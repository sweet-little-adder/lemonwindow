import "./App.css";
import Header from "./components/Header";

function App() {
    return (
        <div className="w-full flex-col justify-center ">
            <div className="items-start sticky top-0">
                <Header />
            </div>

            <div className=""></div>

            <div className="card"></div>
        </div>
    );
}

export default App;
