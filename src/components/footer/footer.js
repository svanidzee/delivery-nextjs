/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Box, Flex, Heading, Link } from "theme-ui";

import FOOTER_DATA from "./footer.data";

const Footer = () => {
  return (
    <Box
      as="footer"
      sx={{
        variant: "layout.footer",
      }}
    >
      <Container>
        <Flex
          sx={{
            variant: "row.footer",
          }}
        >
          {FOOTER_DATA.map(({ title, menuItem }, index) => (
            <Box
              sx={{
                variant: "widget.footer",
              }}
              key={`footer-widget-key-${index}`}
            >
              <Heading as="h2">{title}</Heading>
              <ul>
                {menuItem.map(({ link, label }, index) => (
                  <li key={`footer-menu-item-key-${index}`}>
                    <Link href={link}>{label}</Link>
                  </li>
                ))}
              </ul>
            </Box>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
