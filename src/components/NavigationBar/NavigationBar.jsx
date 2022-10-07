import { Link } from "react-router-dom";
import tabs from "../../static/tabs.json";
import Li from "../Li";

const NavigationBar = () => {
  return (
    <ul>
      {tabs.map((tab, index) => (
        <Li key={index}>
          <Link
            style={{textTransform: "capitalize"}}
            children={tab}
            to={"/" + tab}
            className="App-link"
          />
        </Li>
      ))}
    </ul>
  );
};

export default NavigationBar;
