import RouteElement from "./routes";
import { AppMain } from "./components/Styles/Styles";
import AppHeader from "./components/AppHeader";

const App = () => {
  return (
    <div>
      <AppHeader />
      <AppMain>
        <RouteElement />
      </AppMain>
    </div>
  );
};

export default App;
