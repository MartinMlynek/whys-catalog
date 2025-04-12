import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Layout } from "./layout/layout";
import { darkThemeOptions } from "./layout/theme";
import ErrorBoundary from "./layout/error-boundary/error-boundary";
import { ErrorFallback } from "./layout/error-boundary/error-fallback";

function App() {
  return (
    <ThemeProvider theme={darkThemeOptions}>
      <CssBaseline />
      <ErrorBoundary fallback={<ErrorFallback />}>
        <Layout>
          <p>Ahoj světe! Tohle je obsah aplikace.</p>
        </Layout>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
