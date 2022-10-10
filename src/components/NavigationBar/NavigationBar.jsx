import tabs from "../../static/tabs.json";
import { Ul, Li, AppLink, Nav } from "../Styles/Styles";

const NavigationBar = () => {
  return (
    <Nav>
      <Ul>
        {tabs.map((tab, index) => (
          <Li key={index}>
            <AppLink children={tab} to={"/" + tab} />
          </Li>
        ))}
      </Ul>
    </Nav>
  );
};

export default NavigationBar;
