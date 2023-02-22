import styled, { css } from 'styled-components';

// 복주머니 리스트
export const MyPocketList = styled.ul`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 45px;
  row-gap: 40px;
`;

// 복주머니 리스트 아이템
export const MyPocketItem = styled.li<{ status: string }>`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  & div {
    ${(props) =>
      props.status === 'READ' &&
      css`
        filter: grayscale(80%);
      `}
  }

  & span {
    font-weight: bold;
  }
`;

// 탭 메뉴 버튼 리스트
export const TabButtonList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

// 탭 메뉴 버튼 리스트 아이템
export const TabButtonItem = styled.li`
  & button {
    width: 100px;
    padding: 12px 0;
    font-weight: bold;
    color: var(--bg-color);
    border-radius: 3px;
    background-color: #d9d9d9;
  }

  & button.active {
    background-color: #e48254;
  }
`;
