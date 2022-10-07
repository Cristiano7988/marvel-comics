import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Comics from "../components/Comics";
import Characters from "../components/Characters";

const RouteElement = () => <Router>
    <Routes>
        <Route element={<Comics />} path="/comics" />
        <Route element={<Characters />} path="/characters" />
    </Routes>
</Router>

export default RouteElement;