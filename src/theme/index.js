export default {
  breakpoints: [
    "480px",
    "640px",
    "768px",
    "1024px",
    "1220px",
    "1366px",
    "1620px",
  ],
  space: [0, 5, 10, 15, 20, 25, 30, 50, 80, 100, 120, 150],
  colors: {
    text: "hsl(85, 4%, 35%)", // body color and primary color
    text_secondary: "#676A8B", // secondary body color
    heading: "hsl(85, 4%, 15%)", // primary heading color
    heading_secondary: "hsl(85, 4%, 35%)", // heading color
    background: "#FFFFFF", // body background color
    background_secondary: "red", // secondary background color

    // nav color
    navcolor: "hsl(85, 4%, 15%)",

    // theme
    toggler: "hsl(85, 4%, 15%)", // border color

    primary: "hsl(85, 98%, 60%)", // primary button and link color
    secondary: "hsl(85, 4%, 15%)", // secondary color - can be used for hover states
    muted: "#FFFFFF", // muted color
    accent: "hsl(85,98%,80%)", // a contrast color for emphasizing UI

    // dark mode
    modes: {
      dark: {
        text: "hsl(85, 4%, 35%)", // body color and primary color
        text_secondary: "#676A8B", // secondary body color
        heading: "hsl(120,3%,95%)", // primary heading color
        heading_secondary: "hsl(79,5%,79%)", // heading color
        background: "hsl(80,9%,12%)",
        background_secondary: "red", // secondary background color

        navcolor: "#FFFFFF",

        // theme btn bg
        toggler: "#FFFFFF", // border color

        // button bg
        primary: "hsl(85, 98%, 60%)", // primary button and link color
        //btn color
        secondary: "hsl(85, 4%, 15%)", // secondary color - can be used for hover states

        // card bg
        muted: "hsl(89,7%,16%)", // muted color

        // footer bg
        accent: "hsl(89,7%,16%)", // a contrast color for emphasizing UI
      },
    },
  },
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
    monospace: "Poppins, sans-serif",
  },
  fontSizes: [12, 14, 16, 18, 19, 20, 21, 24, 32, 34, 48, 50, 64],
  fontWeights: {
    body: "normal",
    heading: 600,
    bold: 700,
    bolder: 800,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.1,
  },
  letterSpacings: {
    body: "normal",
    heading: "0.3px",
    caps: "-0.5px",
  },
  // variants

  // root styles
  styles: {
    root: {
      fontFamily: "heading",
      lineHeight: "body",
      fontWeight: "bolder",
      WebkitFontSmoothing: "antialiased",
      //backgroundColor: "white",
      color: "text",
      a: {
        cursor: "pointer",
        textDecoration: "none",
      },
    },
    ul: {
      listStyle: "none",
    },
    i: {},
  },
};
