import React from "react";
import {
  Container,
  Box,
  Heading,
  Text,
  Image as Img,
  Button,
  Grid,
} from "theme-ui";

const CONTACT_DATA = {
  posts: [
    {
      title: "Contact Us From",
      subTitle: "Here",
      text: "You can contact us from here, you can write to us, call us or visit our service center, we will gladly assist you.",
      Telephone: "Telephone: +256 - 245 - 789",
      Email: "delivery@email.com",
      Location: "Location: Kampala - Uganda",
      buttonText: "Contact Us",
    },
  ],
};

const WhyChoose = () => {
  const { posts } = CONTACT_DATA;
  return (
    <Box
      as="section"
      id="contact"
      sx={{
        variant: "section.contact",
      }}
    >
      <Container sx={{ position: "relative" }}>
        <Grid
          columns={[1, 1, 1, 2, 3, 3, 3]}
          sx={{
            variant: "row.contact",
          }}
        >
          {posts.map(
            (
              { title, subTitle, text, Telephone, Email, Location, buttonText },
              index
            ) => (
              <>
                <Box
                  key={`why-choose-post-key-${index}`}
                  sx={{
                    variant: "post.contact",
                  }}
                >
                  <Heading
                    sx={{
                      variant: "text.heading7",
                    }}
                    as="h3"
                  >
                    {title}
                  </Heading>
                  <Heading
                    sx={{
                      variant: "text.heading7",
                    }}
                    as="h3"
                  >
                    {subTitle}
                  </Heading>
                  <Text
                    sx={{
                      variant: "text.secondary7",
                    }}
                    as="p"
                  >
                    {text}
                  </Text>
                </Box>
                <Box
                  sx={{
                    variant: "content.contact",
                  }}
                >
                  <Text sx={{ marginBottom: "1em" }} as="p">
                    {Telephone}
                  </Text>
                  <Text sx={{ marginBottom: "1em" }} as="p">
                    {Email}
                  </Text>
                  <Text sx={{ marginBottom: "1em" }} as="p">
                    {Location}
                  </Text>
                </Box>
                <Box sx={styles.btnWrap}>
                  <Button
                    sx={{
                      variant: "buttons.primary",
                    }}
                  >
                    {buttonText}
                  </Button>
                </Box>
              </>
            )
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChoose;

const styles = {
  btnWrap: {
    display: "flex",
    alignItems: "center",
    mt: [0, "5px", null, "30px", "35px", "30px"],
    justifyContent: ["flex-start", null, null, "flex-start"],
    position: "relative",
    right: ["-15px", "-15px", "-14px", "-25px", "-30px", "10px", "50px"],
  },
};
