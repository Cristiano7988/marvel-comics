import { Link } from "react-router-dom";

const tabs = ["Characters", "Comics", "Creators", "Events", "Series", "Stories"];

const NavigationBar = () => {
  return (
    <ul>
      {tabs.map((tab, index) => (
        <li key={index}>
          <Link
            children={tab}
            to={"/" + tab.toLowerCase()}
            className="App-link"
          />
        </li>
      ))}
    </ul>
  );
};

export default NavigationBar;
