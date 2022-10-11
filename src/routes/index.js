import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import NavigationBar from "../components/NavigationBar";
import Page from "../components/Page";
import PageDetails from "../components/PageDetails";
import endpoints from "../static/tabs.json";

const RouteElement = ({ privateKey }) => (
  <Router basename={process.env.PUBLIC_URL}>
    <NavigationBar />

    <Routes>
      {endpoints.map((endpoint, index) => (
        <Route key={index}>
          <Route
            path={"/" + endpoint}
            exact
            element={
              <Page
                privateKey={privateKey}
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
                privateKey={privateKey}
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
