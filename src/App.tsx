import React from "react";
import AppRoutes from "./routes/AppRoutes";
import Layout from "./style/Layout";
// 브랜치 develop 생성
const App = () => {
  return (
    <>
      <Layout>
        <AppRoutes />
      </Layout>
    </>
  );
};

export default App;
