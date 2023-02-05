import styled from "styled-components";
import background from "@/assets/common-bg.png";

const WrapperBoxStyle = styled.div`
  padding: 0 30px;
  max-width: 390px;
  width: 100%;
  height: 844px;
  background-image: url(${background});
  background-repeat: no-repeat;
  border-radius: 10px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

export default WrapperBoxStyle;
