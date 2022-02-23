import theme from "theme";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout></Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
