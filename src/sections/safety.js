import React from "react";
import Image from "next/image";
import { Container, Box, Heading, Text } from "theme-ui";

import SafetyImage from "assets/security-ilustration.svg";

const SAFETY_DATA = {
  title: "Your Safety",
  subTitle: "Is Important",
  text: "When your order reaches you, we have the health safety protocols, so that you are protected from any disease.",
  safetyImage: SafetyImage,
};

const Safety = () => {
  const { title, subTitle, text, safetyImage } = SAFETY_DATA;

  return (
    <Box
      as="section"
      id="safety"
      sx={{
        variant: "section.safety",
      }}
    >
      <Container
        sx={{
          variant: "container.safety",
        }}
      >
        <Box
          sx={{
            variant: "content.safety",
          }}
        >
          <Heading
            sx={{
              variant: "text.heading3",
            }}
            as="h2"
          >
            {title}
          </Heading>
          <Heading
            sx={{
              variant: "text.heading3",
            }}
            as="h2"
          >
            {subTitle}
          </Heading>
          <Text
            sx={{
              variant: "text.secondary3",
            }}
            as="h6"
          >
            {text}
          </Text>
        </Box>

        <Box
          sx={{
            variant: "images.safety",
          }}
        >
          <Image
            src={safetyImage}
            alt="Banner Mockup"
            width={740}
            height={442}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Safety;
