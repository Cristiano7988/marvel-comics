import { useNavigate } from "react-router-dom";
import { Button, Message } from "../Styles/Styles";
import { AiOutlineHome, AiOutlineArrowLeft } from "react-icons/ai";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <Message success={false}>
      <h1 children="Page not found" />
      <Button children={<AiOutlineArrowLeft />} onClick={() => navigate(-1)} />
      <Button children={<AiOutlineHome />} onClick={() => navigate("/")} />
    </Message>
  );
};

export default ErrorPage;
