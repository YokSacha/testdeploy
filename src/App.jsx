import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";


export default function App() {
    return (
        <Routes>
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/*" element={<Home />} />
        </Routes>
    );
};
