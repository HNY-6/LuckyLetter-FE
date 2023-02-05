import styled, { css } from 'styled-components';

const MyPocketItemStyle = styled.li<{ isRead: boolean }>`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  & div {
    ${(props) =>
      props.isRead &&
      css`
        filter: grayscale(80%);
      `}
  }

  & span {
    font-weight: bold;
  }
`;

export default MyPocketItemStyle;
