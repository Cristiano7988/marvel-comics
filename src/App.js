import RouteElement from "./routes";
import { AppMain, InputContainer } from "./components/Styles/Styles";
import AppHeader from "./components/AppHeader";
import { useState } from "react";

const App = () => {
  const [privateKey, setPrivatekey] = useState("");
  return (
    <div>
      <AppHeader privateKey={privateKey} />
      <InputContainer>
        <span>Enter the private key: </span>
        <input type="text" onChange={(e) => setPrivatekey(e.target.value)} />
      </InputContainer>
      <AppMain>
        <RouteElement privateKey={privateKey} />
      </AppMain>
    </div>
  );
};

export default App;
