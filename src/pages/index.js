import theme from "theme";
import Home from "../sections/";
import About from "../sections/about";
import Safety from "../sections/safety";
import Services from "../sections/services";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <Home />
          <About />
          <Safety />
          <Services />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
