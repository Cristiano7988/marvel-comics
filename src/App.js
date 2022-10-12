import RouteElement from "./routes";
import { AppMain } from "./components/Styles/Styles";
import AppHeader from "./components/AppHeader";
import Content from "./contexts/Content.js";
import useContent from "./hooks/useContent";

const App = () => {
  const [content] = useContent();

  return (
    <div>
      <Content.Provider value={content}>
        <AppHeader />
        <AppMain>
          <RouteElement />
        </AppMain>
      </Content.Provider>
    </div>
  );
};

export default App;
