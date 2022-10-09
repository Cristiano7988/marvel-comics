import { useEffect, useState } from "react";
import { getData } from "../../services/functions";
import { BackgroundImageForTheLogo, Header, Logo } from "../Styles/Styles";

const generateRandomIndex = (array = 5) => Math.floor(Math.random() * (array.length));
const positions = ["top", "center", "bottom"];

const AppHeader = ({privateKey}) => {
  const [randomIndex, setRandomIndex] = useState(generateRandomIndex());
  const [position, setPosition] = useState(positions[generateRandomIndex(positions)])
  const [list, setList] = useState([]);

  useEffect(() => {
    getData("events", privateKey).then(({ results }) => {
      setList(results);
      setInterval(() => {
        setRandomIndex(generateRandomIndex(results))
        setPosition(positions[generateRandomIndex(positions)])
      }, 4000);
    });
  }, []);

  return (
    <Header>
      {list && list.map(
        (item, index) =>
          randomIndex === index && (
            <BackgroundImageForTheLogo
              key={index}
              image={list[index].thumbnail.path.replace('http', 'https')+"."+list[index].thumbnail.extension}
              position={position}
            />
          )
      )}
      <Logo />
    </Header>
  );
};

export default AppHeader;
