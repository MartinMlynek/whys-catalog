import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Layout } from "./layout/layout";
import { darkThemeOptions } from "./layout/theme";

function App() {
  return (
    <ThemeProvider theme={darkThemeOptions}>
      <CssBaseline />
      <Layout>
        <p>Ahoj světe! Tohle je obsah aplikace.</p>
        <p>Ahoj světe! Tohle je obsah aplikace.</p>
        <p>Ahoj světe! Tohle je obsah aplikace.</p>
        <p>Ahoj světe! Tohle je obsah aplikace.</p>
        <p>Ahoj světe! Tohle je obsah aplikace.</p>
        <p>Ahoj světe! Tohle je obsah aplikace.</p>
        <p>Ahoj světe! Tohle je obsah aplikace.</p>
        <p>Ahoj světe! Tohle je obsah aplikace.</p>
        <p>Ahoj světe! Tohle je obsah aplikace.</p>
        <p>Ahoj světe! Tohle je obsah aplikace.</p>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
