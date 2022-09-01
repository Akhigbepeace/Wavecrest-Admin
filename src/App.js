import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Signup from "Pages/Signup";
import Login from "Pages/Login";
import ForgotPassword from "Pages/ForgotPassword";

function App() {
  const colors = {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  };

  const breakpoints = {
    sm: "320px",
    md: "500px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1440px",
  };

  const fonts = {
    heading: "Open Sans",
    body: "Open Sans",
  };

  const theme = extendTheme({ colors, fonts, breakpoints });

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Fragment>
          <Routes>
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/admin" element={<Login />} />
            <Route exact path="/forgotPassword" element={<ForgotPassword />} />
          </Routes>
        </Fragment>
      </Router>
    </ChakraProvider>
  );
}

export default App;
