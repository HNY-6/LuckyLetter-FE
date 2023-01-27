import styled from "styled-components";
import background from "../../assets/BG.png";

const WrapperBoxStyle = styled.div`
  position: relative;
  padding: 54px 30px;
  width: 390px;
  height: 844px;
  background-image: url(${background});
  border-radius: 10px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

export default WrapperBoxStyle;
