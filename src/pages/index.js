import theme from "theme";
import Home from "../sections/";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <Home />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
