import { RouterProvider } from "react-router-dom";
import MainLayout from "./components/main-layout";
import { router } from "./router";
import { QueryClient, QueryClientProvider } from "react-query";

import "./App.css";
function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <div className="App">
      <MainLayout>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </MainLayout>
    </div>
  );
}

export default App;
