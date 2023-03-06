import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import AppRoutes from './routes/AppRoutes';
import Layout from './style/Layout';

// 브랜치 develop 생성
const App = () => {
  const client = new QueryClient();
  return (
    <>
      <Layout>
        <QueryClientProvider client={client}>
          <AppRoutes />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </Layout>
    </>
  );
};

export default App;
