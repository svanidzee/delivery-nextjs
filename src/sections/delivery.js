import Image from "next/image";
import { Container, Box, Heading, Text, Button, Link } from "theme-ui";

import AppIlustrationImage from "assets/app-Ilustration.svg";

const DELIVERY_DATA = {
  title: "Watch Your Delivery ",
  subTitle: "At Any Time",
  text: "With our app you can view the route of your order, from our local headquarters to the place where you are. Look for the app now!",
  button: {
    link: "#",
    label: "App Store",
  },
  videoBtn: {
    link: "#",
    label: "Google Play",
  },
  appIlustrationImage: AppIlustrationImage,
};

const Delivery = () => {
  const { title, subTitle, text, button, videoBtn, appIlustrationImage } =
    DELIVERY_DATA;

  return (
    <Box
      as="section"
      id="delivery"
      sx={{
        variant: "section.delivery",
      }}
    >
      <Container
        sx={{
          variant: "container.delivery",
        }}
      >
        <Box
          sx={{
            variant: "content.delivery",
          }}
        >
          <Heading
            sx={{
              variant: "text.heading6",
            }}
            as="h2"
          >
            {title}
          </Heading>
          <Heading
            sx={{
              variant: "text.heading6",
            }}
            as="h2"
          >
            {subTitle}
          </Heading>
          <Text
            sx={{
              variant: "text.secondary6",
            }}
            as="h6"
          >
            {text}
          </Text>
          <Box sx={styles.btnWrap}>
            <Link
              href={button.link}
              sx={{
                variant: "buttons.primary",
              }}
            >
              <i class="bx bxl-apple button__icon" sx={styles.icn}></i>
              {button.label}
            </Link>
            <Button
              sx={{
                variant: "buttons.primary",
              }}
              ml={2}
            >
              <i class="bx bxl-play-store button__icon"></i>
              {videoBtn.label}
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            variant: "images.delivery",
          }}
        >
          <Image
            src={appIlustrationImage}
            alt="Banner Mockup"
            width={740}
            height={442}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Delivery;

const styles = {
  btnWrap: {
    display: "flex",
    alignItems: "center",
    mt: ["25px", null, null, "30px", "35px", "50px"],
    justifyContent: [
      "center",
      "center",
      "flex-start",
      null,
      null,
      null,
      "flex-start",
    ],
    i: {
      fontSize: "19px",
    },
  },
};
