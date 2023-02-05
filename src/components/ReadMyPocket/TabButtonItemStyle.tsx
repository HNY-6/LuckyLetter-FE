import styled from 'styled-components';

const TabButtonItemStyle = styled.li`
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

export default TabButtonItemStyle;
