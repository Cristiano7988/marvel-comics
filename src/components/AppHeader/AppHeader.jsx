import { useEffect, useState } from "react";
import { getData } from "../../services/functions";
import { BackgroundImageForTheLogo, Header, Logo } from "../Styles/Styles";

const generateRandomIndex = (array = 5) => Math.floor(Math.random() * (array.length));
const positions = ["top", "center", "bottom"];

const AppHeader = () => {
  const [randomIndex, setRandomIndex] = useState(generateRandomIndex());
  const [position, setPosition] = useState(positions[generateRandomIndex(positions)])
  const [list, setList] = useState([]);

  useEffect(() => {
    if(!isNaN(list) || !list) getData("events").then(({ results }) => {
      setList(results);
      setInterval(() => {
        setRandomIndex(generateRandomIndex(results))
        setPosition(positions[generateRandomIndex(positions)])
      }, 3500);
    });
  }, []);

  return (
    <Header>
      {list && list.map(
        (item, index) =>
          <BackgroundImageForTheLogo
            show={randomIndex === index}
            key={index}
            image={list[index].thumbnail.path.replace('http', 'https')+"."+list[index].thumbnail.extension}
            position={position}
          />
      )}
      <Logo />
    </Header>
  );
};

export default AppHeader;
