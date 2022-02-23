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
  section: {
    home: {
      overflow: "hidden",
      pt: ["115px", "125px", "135px", "200px", "170px", "170px", "185px"],
      pb: ["10px", "15px", null, "10px", "50px", "60px", "90px", "20px"],
    },
    about: {
      overflow: "hidden",
      pt: ["60px", "80px", "80px", "90px", "50px", "45px", "5px"],
      pb: [0, "58px", null, "10px", "40px", "20px", "45px", "160px"],
    },
  },
  container: {
    home: {
      position: "relative",
      display: "flex",
      flexWrap: "wrap",
      alignItems: [
        "flex-start",
        "center",
        "flex-start",
        "flex-star",
        null,
        null,
        null,
      ],
      justifyContent: [
        "center",
        "center",
        "flex-start",
        "flex-start",
        "flex-start",
        "center",
        "center",
      ],
      flexDirection: ["column", "column", "row", "row", "row", "row", "row"],
    },
    about: {
      position: "relative",
      display: "flex",
      flexWrap: "wrap",
      alignItems: [
        "flex-start",
        "center",
        "center",
        "flex-star",
        null,
        null,
        null,
      ],
      justifyContent: [
        "center",
        "center",
        "flex-start",
        "flex-start",
        "flex-start",
        "center",
        "center",
      ],
      flexDirection: ["column", "column", "row", "row", "row", "row", "row"],
    },
  },
  content: {
    home: {
      maxWidth: ["100%", null, "285px", "420px", "400px", "395px", "405px"],
      textAlign: ["left", null, null, "left"],
      order: ["2", "2", "1", null, null, null, null],
      position: "relative",
      right: ["-10px", "-10px", "-10px", "-5px", "-10px", "-60px", "-15px"],
    },
    about: {
      maxWidth: ["100%", "580px", "295px", "320px", "400px", "395px", "395px"],
      textAlign: ["center", "center", "left", "left", "left", "left", "left"],
      order: ["1", "1", "2", null, null, null, null],
      position: "relative",
      right: ["-5px", "-5px", "-10px", "2px", "3px", "-60px", "-10px"],
    },
  },
  text: {
    heading1: {
      maxWidth: ["300px", null, null, "275px", "460px", "545px", "405px"],
      fontSize: [28, 32, null, 34, 48, 48, 48, 48],
      lineHeight: [1.3, 1.5, 1.5, 1.5, null, null, 1.5],
      color: "heading",
      letterSpacing: "heading",
      fontWeight: "bold",
      mx: ["0", null, null, "0", "0", null, null],
    },
    secondary1: {
      fontSize: [15, null, null, null, 16, 16],
      lineHeight: 1.6,
      color: "heading_secondary",
      fontWeight: "normal",
      maxWidth: ["100%", null, "280px", "320px", "400px", "315px", "315px"],
      mt: [3, null, null, "18px"],
      pr: [0, null, null, null, null, null, null, "50px"],
    },
  },
  buttons: {
    primary: {
      backgroundColor: "primary",
      borderRadius: "3rem",
      lineHeight: "heading",
      fontSize: 15,
      padding: ["14px 20px 13px", "14px 25px 13px", "15px 21px 15px"],
      fontWeight: "heading",
      display: "inline-flex",
      alignItems: "center",
      cursor: "pointer",
      color: "secondary",
      transition: "0.3s",
      "&:hover": {
        opacity: 0.8,
      },
    },
  },
  images: {
    home: {
      mt: ["20px", null, null, 0, null, null, null],
      mb: ["50px", null, null, null, null, null, null],
      pl: [0, null, null, null, 0, null, null, null],
      display: "flex",
      justifyContent: "flex-end",
      position: "relative",
      right: ["-50px", "-20px", "-50px", "-40px", "-50px", "-60px", "-15px"],
      order: ["1", null, null, null, null],
      width: [
        "calc(100% - 110px)",
        "calc(100% - 146px)",
        "calc(100% - 290px)",
        "calc(70% - 120px)",
        "calc(100% - 420px)",
        "calc(100% - 600px)",
        "calc(100% - 610px)",
      ],
      textAlign: ["center", null],
    },
  },
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
