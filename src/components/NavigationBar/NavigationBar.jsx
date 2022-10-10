import tabs from "../../static/tabs.json";
import { Ul, Li, AppLink } from "../Styles/Styles";

const NavigationBar = () => {
  return (
    <nav>
      <Ul>
        {tabs.map((tab, index) => (
          <Li key={index}>
            <AppLink children={tab} to={"/" + tab} />
          </Li>
        ))}
      </Ul>
    </nav>
  );
};

export default NavigationBar;
