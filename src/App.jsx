import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage, TestPage, LoginLogoutSignup } from "./pages";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/test" element={<TestPage />} />
                    <Route path="/user" element={<LoginLogoutSignup/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
