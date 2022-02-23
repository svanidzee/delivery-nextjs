import React from "react";
import Image from "next/image";
import { Container, Box, Heading, Text } from "theme-ui";

import AboutImage from "assets/about-ilustration.svg";

const ABOUT_DATA = {
  title: "Find Out A Little More",
  subTitle: "About Us",
  text: "We are a company dedicated to the distribution of products by delivery to your home or to the place where you are, with the best quality of delivery.",
  aboutImage: AboutImage,
};

const About = () => {
  const { title, subTitle, text, aboutImage } = ABOUT_DATA;

  return (
    <Box
      as="section"
      id="about"
      sx={{
        variant: "section.about",
      }}
    >
      <Container
        sx={{
          variant: "container.about",
        }}
      >
        <Box
          sx={{
            variant: "content.about",
          }}
        >
          <Heading
            sx={{
              variant: "text.heading2",
            }}
            as="h2"
          >
            {title}
          </Heading>
          <Heading
            sx={{
              variant: "text.heading2",
            }}
            as="h2"
          >
            {subTitle}
          </Heading>
          <Text
            sx={{
              variant: "text.secondary2",
            }}
            as="h6"
          >
            {text}
          </Text>
        </Box>
        <Box
          sx={{
            variant: "images.about",
          }}
        >
          <Image
            src={aboutImage}
            alt="Banner Mockup"
            width={740}
            height={442}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default About;
