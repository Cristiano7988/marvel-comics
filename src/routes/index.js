import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Comics from "../components/Comics";

const RouteElement = () => <Router>
    <Routes>
        <Route element={<Comics />} path="/comics" />
    </Routes>
</Router>

export default RouteElement;