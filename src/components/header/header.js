/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Flex, Button } from "theme-ui";
import { Link as ScrollLink } from "react-scroll";

import { DrawerProvider } from "contexts/drawer/drawer.provider";
import MobileDrawer from "./mobileDrawer";

import logoDark from "assets/logo.svg";
import Logo from "components/logo";

import MENU_DATA from "./header.data";
import ColorSwitcher from "components/switcher";

export default function Header({ className }) {
  return (
    <DrawerProvider>
      <header
        sx={{
          variant: "layout.header",
        }}
        className={className}
      >
        <Container
          sx={{
            variant: "container.header",
          }}
        >
          <Logo image={logoDark} />

          <Flex
            as="nav"
            sx={{
              variant: "layout.toolbar",
            }}
          >
            {MENU_DATA.map(({ path, label }, i) => (
              <ScrollLink
                activeClass="active"
                sx={{
                  variant: "layout.toolbar.navLink",
                }}
                to={path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={i}
              >
                {label}
              </ScrollLink>
            ))}
          </Flex>
          <ColorSwitcher />
          <Button
            sx={{
              variant: "buttons.primary",
              marginLeft: [null, null, null, null, null, null, "140px"],
              "@media screen and (max-width: 1024px)": {
                display: "none",
              },
            }}
          >
            Order Now!
          </Button>
          <MobileDrawer />
        </Container>
      </header>
    </DrawerProvider>
  );
}
