import styled, { css } from "styled-components";

// 발도장 이미지 스프라이트
import FootPaintingImage from "@/assets/foot-painting-each-color.png";

const LetterGridBox = styled.div`
  display: grid;
  grid-template-rows: 1fr 5fr 1fr;
  height: 100%;
`;

const LetterToParagraph = styled.p`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
  text-decoration: underline;
`;

const LetterContentParagraph = styled.p`
  line-height: 1.5;
  overflow: scroll;
  font-size: 16px;
  -webkit-line-clamp: 9;
`;

const LetterFromParagraph = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  justify-self: flex-end;
  align-self: flex-end;
  font-size: 12px;
  font-weight: bold;

  & span {
    font-size: 14px;
  }

  &::after {
    display: inline-block;
    content: "";
    width: 42px;
    height: 42px;
    background-image: url(${FootPaintingImage});
    background-repeat: no-repeat;

    // props인 color를 전달받아 설정한 발도장 이미지 렌더링
    ${(props) =>
      props.color === "red" &&
      css`
        background-position: 0 0;
      `}
    ${(props) =>
      props.color === "navy" &&
      css`
        background-position: -42px 0;
      `}
    ${(props) =>
      props.color === "orange" &&
      css`
        background-position: -84px 0;
      `}
    ${(props) =>
      props.color === "green" &&
      css`
        background-position: -126px 0;
      `}
    ${(props) =>
      props.color === "yellow" &&
      css`
        background-position: -168px 0;
      `}
  }
`;

const LetterContent = (props: { color: string }) => {
  return (
    <LetterGridBox>
      <LetterToParagraph>To.(수신자)에게</LetterToParagraph>
      <LetterContentParagraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, iusto
        dignissimos quia, repellat, quam modi reiciendis recusandae blanditiis
        cumque possimus porro veniam voluptate ea consequatur perspiciatis illo
        nesciunt hic! Ipsum?
      </LetterContentParagraph>
      <LetterFromParagraph color={props.color}>
        From.<span>(발신자)</span>
      </LetterFromParagraph>
    </LetterGridBox>
  );
};

export default LetterContent;
