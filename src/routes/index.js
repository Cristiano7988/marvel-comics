import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import Page from "../components/Page";
import endpoints from "../static/tabs.json";

const RouteElement = () => <Router basename={process.env.PUBLIC_URL}>
    <NavigationBar />

    <Routes>
        {endpoints.map((endpoint, index) => (
            <Route
                key={index}
                path={"/" + endpoint}
                element={
                    <Page
                        endpoint={endpoint}
                        defaultValue={{list: false, request: false}}
                    />
                }
            />
        ))}
    </Routes>
</Router>

export default RouteElement;