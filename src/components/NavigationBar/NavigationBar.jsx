import { Link } from "react-router-dom";
import tabs from "../../static/tabs.json";

const NavigationBar = () => {
  return (
    <ul>
      {tabs.map((tab, index) => (
        <li key={index}>
          <Link
            style={{textTransform: "capitalize"}}
            children={tab}
            to={"/" + tab}
            className="App-link"
          />
        </li>
      ))}
    </ul>
  );
};

export default NavigationBar;
