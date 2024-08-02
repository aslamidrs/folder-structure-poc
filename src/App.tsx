import { Box } from "@mui/joy";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Payments from "./pages/b2b/payments/payments/Payments";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Box width="100vw" height="100vh">
        <Payments />
      </Box>
    </QueryClientProvider>
  );
}

export default App;
