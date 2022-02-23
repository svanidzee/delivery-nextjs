import React from "react";
import Image from "next/image";
import { Container, Box, Heading, Text, Button, Link } from "theme-ui";

import HomeImage from "assets/home-ilustration.svg";

const HOME_DATA = {
  title: "Order Products Faster Easier",
  text: "Order your favorite foods at any time and we will deliver them right to where you are.",
  button: {
    link: "#",
    label: "Get Started",
  },
  videoBtn: {
    link: "#",
    label: "White paper",
  },
  homeImage: HomeImage,
};

const Banner = () => {
  const { title, text, button, homeImage } = HOME_DATA;

  return (
    <Box
      as="section"
      id="home"
      sx={{
        variant: "section.home",
      }}
    >
      <Container
        sx={{
          variant: "container.home",
        }}
      >
        <Box
          sx={{
            variant: "content.home",
          }}
        >
          <Heading
            sx={{
              variant: "text.heading1",
            }}
            as="h2"
          >
            {title}
          </Heading>
          <Text
            sx={{
              variant: "text.secondary1",
            }}
            as="h6"
          >
            {text}
          </Text>
          <Box sx={styles.btnWrap}>
            <Button
              sx={{
                variant: "buttons.primary",
              }}
            >
              {button.label}
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            variant: "images.home",
          }}
        >
          <Image src={homeImage} alt="Banner Mockup" width={740} height={442} />
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  btnWrap: {
    display: "flex",
    alignItems: "center",
    mt: ["25px", "31px", null, "30px", "35px", "30px"],
    justifyContent: ["flex-start", null, null, "flex-start"],
  },
};
