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
  layout: {
    footer: {
      pt: ["65px", null, "75px", null, "90px"],
      pb: ["25px", null, "35px", "25px", "80px"],
      backgroundColor: "accent",
    },
  },
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
    safety: {
      overflow: "hidden",
      pt: ["65px", "22px", "135px", "130px", "110px", "120px", "105px"],
      pb: ["55px", "75px", null, "110px", "110px", "146px", "140px", "160px"],
    },
    services: {
      pb: [
        "20px",
        "30px",
        null,
        "10px",
        "85px",
        null,
        "25px",
        "125px",
        "140px",
      ],
    },
    delivery: {
      overflow: "hidden",
      pt: ["25px", "45px", null, "110px", "60px", "90px", "125px"],
      pb: ["60px", "85px", null, "140px", "145px", "150px", "140px", "160px"],
    },
    contact: {
      pb: [
        "60px",
        "102px",
        null,
        "140px",
        "145px",
        "150px",
        "145px",
        "125px",
        "140px",
      ],
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
    safety: {
      position: "relative",
      display: "flex",
      flexWrap: "wrap",
      alignItems: [
        "flex-start",
        "flex-start",
        "center",
        "center",
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
    services: {
      position: "relative",
    },
    delivery: {
      position: "relative",
      display: "flex",
      flexWrap: "wrap",
      alignItems: [
        "flex-start",
        "center",
        "center",
        "center",
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
    safety: {
      maxWidth: ["372px", "580px", "295px", "350px", "400px", "395px", "395px"],
      textAlign: ["center", "center", "left", "left", "left", "left", "left"],
      position: "relative",
      right: ["-10px", "-3px", "-10px", "-13px", "-15px", "-60px", "-10px"],
    },
    delivery: {
      maxWidth: ["360px", "572px", "295px", "350px", "400px", "395px", "395px"],
      textAlign: ["center", "center", "left", "left", "left", "left", "left"],
      order: ["1", "1", "2", null, null, null, null],
      position: "relative",
      right: ["-5px", "-5px", "10px", "10px", "20px", "20px", "20px"],
    },
    contact: {
      fontSize: 13,
      fontWeight: "500",
      color: "heading_secondary",
      position: "relative",
      top: [null, null, null, "38px", "38px", "48px", "48px"],
      right: ["-15px", "-19px", "-10px", "-80px", "-100px", "-70px", "-20px"],
    },
  },
  row: {
    services: {
      display: "flex",
      flexWrap: "wrap",
      gap: "6px",
      justifyContent: [
        "center",
        "center",
        "flex-start",
        "flex-start",
        "center",
        "center",
        "center",
      ],
    },
    footer: {
      display: "flex",
      flexWrap: "wrap",
      ml: ["10px", 0, 0, 0, 0, "90px", "60px"],
      px: ["11px", 0, 0, "20px", "20px", "75px", "70px"],
    },
    contact: {
      position: "relative",
      right: ["-5px", "5px", "3px", "10px", "10px", "-100px", "-145px"],
    },
  },
  post: {
    services: {
      padding: 2,
      minHeight: 130,
      m: 1,
      borderRadius: "1rem",
      boxShadow: "0px 2px 6px hsla(85, 100%, 15%, 0.15)",
      mb: ["32px", "12px", null, null, null, 0, 0],
      flex: [
        "0 0 94%",
        "0 0 94",
        "0 0 46%",
        "0 0 46%",
        "0 1 31%",
        "0 0 23%",
        "0 0 25%",
      ],
      textAlign: "center",
      backgroundColor: "muted",
    },
    contact: {
      mb: ["10px", null, null, null, 0],
      flex: ["0 0 100%", null, "0 0 50%", null, "0 0 38%"],
      textAlign: ["center", "center", "left", "left", "left", "left", "left"],
      maxWidth: ["365px", "590px", null, null, null, "340px", "380px"],
      position: "relative",
      right: ["-4px", "-10px", "-10px", "-24px", "-25px", "-60px", "20px"],
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
    heading2: {
      fontSize: [21, 21, 21, 21, 28, 28, 28, 28],
      lineHeight: [1.3, null, null, 1.3],
      color: "heading",
      letterSpacing: "heading",
      fontWeight: "heading",
    },
    heading3: {
      fontSize: [21, 21, 21, 21, 28, 28, 28, 28],
      lineHeight: [1.3, null, null, 1.3],
      color: "heading",
      letterSpacing: "heading",
      fontWeight: "heading",
    },
    heading4: {
      fontSize: [18, null, null, null, null, 19],
      lineHeight: 1.45,
      letterSpacing: "caps",
      fontWeight: "heading",
      color: "heading",
      mt: ["16px", "20px", null, null, "25px", "30px", "20px", "20px"],
      mb: ["10px", "8px", null, null, null, null, "20px"],
    },
    heading5: {
      fontSize: [21, 21, null, null, 28, 28],
      lineHeight: 1.35,
      color: "heading",
      mb: [1, "1px", null, null, null, null, "2px"],
      fontWeight: "heading",
    },
    heading6: {
      fontSize: [21, 21, 21, 21, 28, 28, 28, 28],
      lineHeight: [1.3, null, null, 1.3],
      color: "heading",
      letterSpacing: "heading",
      fontWeight: "heading",
    },
    heading7: {
      fontSize: [21, 21, 21, 21, 21, 28, 28, 28],
      lineHeight: [1.4, null, null, 1.35],
      fontFamily: "heading",
      letterSpacing: "-0.2px",
      mx: ["0", null, null, "auto", "0"],
      color: "heading",
      fontWeight: "heading",
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
    secondary2: {
      fontSize: [15, null, null, null, 16, 16],
      lineHeight: 1.6,
      color: "heading_secondary",
      fontWeight: "normal",
      mt: [3, null, null, "18px"],
      pr: [0, null, 0, null, null, null, null, "50px"],
    },
    secondary3: {
      fontSize: [15, null, null, null, 16, 16],
      lineHeight: 1.6,
      color: "heading_secondary",
      fontWeight: "normal",
      mt: [3, null, null, "18px"],
      pr: [0, null, 0, null, null, null, null, "50px"],
    },
    secondary4: {
      maxWidth: "466px",
      mt: ["15px", "15px", null, null, null, "25px", "25px"],
      mx: "auto",
      color: "#02073E",
      fontSize: [15, 15, null, null, null, 16],
      fontWeight: "500",
      lineHeight: 1.5,
      color: "heading_secondary",
      px: [null, "15px", "5px", null, null, "5px", "10px"],
    },
    secondary5: {
      fontSize: [21, 21, null, null, null, 28, 28],
      fontWeight: "heading",
      color: "heading",
    },
    secondary6: {
      fontSize: [15, null, null, null, 16, 16],
      lineHeight: 1.6,
      color: "heading_secondary",
      fontWeight: "normal",
      mt: [3, null, null, "18px"],
      pr: [0, "10px", 0, null, null, null, null, "50px"],
    },
    secondary7: {
      mt: [3, null, null, "18px"],
      pr: [0, null, null, null, null, null, null, "10px"],
      fontSize: [15, null, null, null, 16, 16],
      lineHeight: [1.6, 1.7],
      color: "heading_secondary",
      fontWeight: "normal",
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
    cardButton: {
      backgroundColor: "transparent",
      fontFamily: "heading",
      color: "heading",
      fontSize: 16,
      fontWeight: "heading",
      pl: 0,
      cursor: "pointer",
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
    about: {
      mt: ["43px", null, null, 0],
      mb: [0, null, null, 0],
      pl: [0, null, null, null, 0],
      display: "flex",
      justifyContent: "flex-end",
      position: "relative",
      right: ["-40px", "2px", "30px", "27px", "40px", "-10px", "40px"],
      order: ["2", "1", null, null, null],
      maxWidth: [
        "calc(100% - 110px)",
        "calc(100% - 155px)",
        "calc(100% - 310px)",
        "calc(100% - 350px)",
        "calc(100% - 420px)",
        "calc(100% - 600px)",
        "calc(100% - 600px)",
      ],
      textAlign: ["left", null],
    },
    safety: {
      mt: ["55px", "37px", 0, 0, 0, null, null],
      mb: ["20px", null, null, null, "10px", null, null],
      pl: [0, null, null, null, 0, null, null, null],
      display: "flex",
      justifyContent: "flex-end",
      position: "relative",
      right: ["-45px", "-82px", "-40px", "-20px", "-30px", "-120px", "-55px"],
      width: [
        "calc(100% - 110px)",
        "calc(100% - 146px)",
        "calc(100% - 300px)",
        "calc(100% - 360px)",
        "calc(100% - 420px)",
        "calc(100% - 600px)",
        "calc(100% - 610px)",
      ],
      textAlign: ["center", null],
    },
    services: {
      display: "flex",
      minHeight: ["auto", "113px"],
      alignItems: "center",
      justifyContent: "center",
      img: {
        width: ["175px", "140px", null, null, null, "140px", "140px"],
      },
    },
    delivery: {
      mt: ["70px", null, null, 0],
      mb: ["15px", null, null, 0],
      pl: [0, null, null, null, 0],
      display: "flex",
      justifyContent: "flex-end",
      position: "relative",
      right: ["-55px", "-5px", "44px", "40px", "55px", "14px", "50px"],
      order: ["2", "1", null, null, null],
      maxWidth: [
        "calc(100% - 110px)",
        "calc(100% - 155px)",
        "calc(100% - 310px)",
        "calc(100% - 350px)",
        "calc(100% - 420px)",
        "calc(100% - 600px)",
        "calc(100% - 600px)",
      ],
      minWidth: "",
      textAlign: ["left", null],
    },
  },
  widget: {
    footer: {
      flex: ["0 0 50%", null, "0 0 33.33%", null, "0 0 20%"],
      mb: ["33px", null, null, "45px", 0],
      h2: {
        m: 0,
        lineHeight: 1.35,
        fontSize: ["18px", "18px", "20px", null, null, null, null],
        letterSpacing: "caps",
        color: "heading",
        fontWeight: "heading",
      },
      ul: {
        m: 0,
        p: 0,
        listStyle: "none",
        mt: ["20px", null, null, "25px", "30px"],
        li: {
          mt: ["10px", null, "12px"],
        },
        a: {
          display: "block",
          color: "heading_secondary",
          opacity: 0.8,
          fontSize: 14,
          fontWeight: "500",
          lineHeight: 1.7,
          transition: "all 500ms ease",
          "&:hover": {
            opacity: 1,
          },
        },
      },
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
