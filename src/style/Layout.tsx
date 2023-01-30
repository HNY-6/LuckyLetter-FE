import WrapperBoxStyle from "@/components/UI/WrapperBoxStyle";
import { ReactNode } from "react";
import styled from "styled-components";

const MainLayout = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: start;
`;

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <MainLayout>
      <WrapperBoxStyle>{children}</WrapperBoxStyle>
    </MainLayout>
  );
};
export default Layout;