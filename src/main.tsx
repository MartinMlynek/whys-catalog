import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import ErrorBoundary from "./layout/error-boundary/error-boundary";
import { ErrorFallback } from "./layout/error-boundary/error-fallback";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkThemeOptions } from "./layout/theme";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById("root");
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <ErrorBoundary fallback={<ErrorFallback />}>
        <ThemeProvider theme={darkThemeOptions}>
          <CssBaseline />
          <RouterProvider router={router} />
        </ThemeProvider>
      </ErrorBoundary>
    </StrictMode>
  );
}
