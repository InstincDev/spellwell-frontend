import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ExampleAtom, ExampleMolecule, ExampleOrganism } from "./components";
import { HomePage, TestPage } from "./pages";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/test" element={<TestPage />} />
                </Routes>
            </BrowserRouter>
            {/* <ExampleAtom />
            <ExampleMolecule />
            <ExampleOrganism /> */}
        </div>
    );
}

export default App;
