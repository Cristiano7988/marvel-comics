import { useEffect, useState } from "react";
import useContent from "../../hooks/useContent";
import { BackgroundImageForTheLogo, Header, Logo } from "../Styles/Styles";

const generateRandomIndex = (array = 5) => Math.floor(Math.random() * array.length);
const positions = ["top", "center", "bottom"];

const AppHeader = () => {
  const [randomIndex, setRandomIndex] = useState(generateRandomIndex());
  const [position, setPosition] = useState(positions[generateRandomIndex(positions)]);
  const [content] = useContent();

  useEffect(() => {
      if (content?.events?.results?.length) return;

      setInterval(() => {
        setRandomIndex(generateRandomIndex(content.events.results))
        setPosition(positions[generateRandomIndex(positions)])
      }, 3500);
  }, []);

  return (
    <Header>
      {content?.events?.results &&
        content.events.results.map((item, index) => (
          <BackgroundImageForTheLogo
            show={randomIndex === index}
            key={index}
            image={content.events.results[index].thumbnail.path.replace("http", "https") + "." + content.events.results[index].thumbnail.extension}
            position={position}
          />
        ))}
      <Logo />
    </Header>
  );
};

export default AppHeader;
