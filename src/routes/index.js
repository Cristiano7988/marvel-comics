import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Comics from "../components/Comics";
import Characters from "../components/Characters";
import NavigationBar from "../components/NavigationBar";
import Creators from "../components/Creators";
import Events from "../components/Events";

const RouteElement = () => <Router>
    <NavigationBar />

    <Routes>
        <Route element={<Characters />} path="/characters" />
        <Route element={<Comics />} path="/comics" />
        <Route element={<Creators />} path="/creators" />
        <Route element={<Events />} path="/events" />
    </Routes>
</Router>

export default RouteElement;