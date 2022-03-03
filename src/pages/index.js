import dynamic from "next/dynamic";
const Layout = dynamic(import("components/layout"));
const Home = dynamic(import("sections/home"));
const About = dynamic(import("sections/about"));
const Safety = dynamic(import("sections/safety"));
const Services = dynamic(import("sections/services"));
const Delivery = dynamic(import("sections/delivery"));
const Contact = dynamic(import("sections/contact"));

import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "theme";

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
