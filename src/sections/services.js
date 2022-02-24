import React from "react";
import {
  Container,
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image as Img,
} from "theme-ui";

import cardImage1 from "../assets/services1-ilustration.svg";
import cardImage2 from "../assets/services2-ilustration.svg";
import cardImage3 from "../assets/services3-ilustration.svg";

const SERVICES_DATA = {
  blockTitle: {
    title: "Some Services We",
    text: "Offer",
  },
  posts: [
    {
      image: cardImage1,
      title: "Payment Done",
      text: "Pay with a Visa or PayPal card and without much ado.",
      buttonText: "Learn More",
    },
    {
      image: cardImage2,
      title: "Find Your Product",
      text: "We offer sale of products through the Internet.",
      buttonText: "Learn More",
    },
    {
      image: cardImage3,
      title: "Product Received",
      text: "In our app you can see the delay time of your order.",
      buttonText: "Learn More",
    },
  ],
};

const Services = () => {
  const { blockTitle, posts } = SERVICES_DATA;
  return (
    <Box
      as="section"
      id="services"
      sx={{
        variant: "section.services",
      }}
    >
      <Container
        sx={{
          variant: "container.services",
        }}
      >
        <Box sx={{ textAlign: "center", mb: "25px" }}>
          <Heading
            as="h2"
            sx={{
              variant: "text.heading5",
            }}
          >
            {blockTitle.title}
          </Heading>
          <Text
            as="p"
            sx={{
              variant: "text.secondary5",
            }}
          >
            {blockTitle.text}
          </Text>
        </Box>
        <Flex
          sx={{
            variant: "row.services",
          }}
        >
          {posts.map(({ image, text, title, buttonText }, index) => (
            <Box
              key={`why-choose-post-key-${index}`}
              sx={{
                variant: "post.services",
              }}
            >
              <Box>
                <Heading
                  as="h3"
                  sx={{
                    variant: "text.heading4",
                  }}
                >
                  {title}
                </Heading>
              </Box>
              <Box
                sx={{
                  variant: "images.services",
                }}
              >
                <Img src={image} alt="icon image" />
              </Box>

              <Box>
                <Text
                  sx={{
                    variant: "text.secondary4",
                  }}
                  as="h6"
                >
                  {text}
                </Text>
              </Box>
              <Box sx={{ mt: "10px" }}>
                <Button
                  sx={{
                    variant: "buttons.cardButton",
                  }}
                >
                  {buttonText}
                </Button>
              </Box>
            </Box>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default Services;
