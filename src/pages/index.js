import theme from "theme";
import Home from "../sections/";
import About from "../sections/about";
import Safety from "../sections/safety";
import Services from "../sections/services";
import Delivery from "../sections/delivery";
import Contact from "../sections/contact";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <Home />
          <About />
          <Safety />
          <Services />
          <Delivery />
          <Contact />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
