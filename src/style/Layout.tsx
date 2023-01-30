import WrapperBox from "@/components/UI/WrapperBox";
import { ReactNode } from "react";
import styled from "styled-components";

const MainLayout = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: start;
`;

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <MainLayout>
      <WrapperBox>{children}</WrapperBox>
    </MainLayout>
  );
};
export default Layout;
