import { Route, HashRouter as Router, Routes } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import NavigationBar from "../components/NavigationBar";
import Page from "../components/Page";
import PageDetails from "../components/PageDetails";
import endpoints from "../static/tabs.json";
import config from "../config.json";

const RouteElement = () => (
  <Router basename={config.basename}>
    <NavigationBar />

    <Routes>
      {endpoints.map((endpoint, index) => (
        <Route key={index}>
          <Route
            path={"/" + endpoint}
            exact
            element={
              <Page
                endpoint={endpoint}
                defaultValue={{ list: false, request: false }}
              />
            }
          />
          <Route
            path={"/" + endpoint + "/:id"}
            element={
              <PageDetails
                endpoint={endpoint}
              />
            }
          />
          <Route
            path="*"
            element={<ErrorPage />}
          />
        </Route>
      ))}
    </Routes>
  </Router>
);

export default RouteElement;
