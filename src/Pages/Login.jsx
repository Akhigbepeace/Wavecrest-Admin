import {
  Box,
  Button,
  Checkbox,
  Flex,
  Image,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import React, { Fragment } from "react";
import Logo from "assets/WC-LOGO-july.png";

const Login = () => {
  const loginForms = [
    {
      label: "Email Address",
      for: "email",
      variant: "filled",
      placeholder: "Email",
      type: "email",
    },
    {
      label: "Password",
      for: "password",
      variant: "filled",
      placeholder: "Password",
      type: "password",
    },
  ];

  return (
    <Box>
      <Box
        bg="#021D37"
        h="200px"
        w="100%"
        zIndex="-3"
        position="relative"
      ></Box>

      <Box
        flexDirection="column"
        alignItems="center"
        mt="-80px"
        borderRadius="5px"
        p="30px"
        w={{
          sm: "290px",
          md: "400px",
          lg: "500px",
          xl: "500px",
          "2xl": "500px",
        }}
        mx="auto"
        bg="#FFF"
        zIndex="3"
        boxShadow="1px 1px 10px 1px rgba(0,0,0,0.2)"
      >
        <Box w="60px" mb="30px" mx="auto">
          <Image src={Logo} />
        </Box>

        <form action="">
          {loginForms.map((loginForm) => {
            return (
              <Fragment>
                <label
                  htmlFor={loginForm.for}
                  style={{
                    color: "#021D37",
                    fontFamily: "Manrope",
                    fontSize: "18px",
                    mb:"10px"
                  }}
                >
                  {loginForm.label}
                </label>

                <Input
                  type={loginForm.type}
                  variant={loginForm.variant}
                  placeholder={loginForm.placeholder}
                  mb="10px"
                  py="25px"
                  bg="#EBEDEF"
                  _placeholder={{
                    fontFamily: "Manrope",
                  }}
                  isRequired
                ></Input>
              </Fragment>
            );
          })}
        </form>

        <Flex justifyContent="space-between" mt="10px">
          <Checkbox
            color="#021D37"
            fontFamily="Manrope"
            fontSize="16px"
            fontWeight="500"
          >
            Remember Me
          </Checkbox>

          <Link
            to="/forgotPassword"
            as={NavLink}
            color="#021D37"
            fontFamily="Manrope"
            fontSize="15px"
            fontWeight="500"
            _hover={{
              textDecoration: "none",
            }}
          >
            Forgot Password
          </Link>
        </Flex>

        <Button
          type="submit"
          w="100px"
          mt="30px"
          bg="#021D37"
          color="white"
          fontFamily="Manrope"
          fontWeight="700"
          fontSize="16px"
          textAlign="center"
          borderRadius="5px"
          _hover={{
            bg: "#020E1B",
          }}
        >
          LOGIN
        </Button>

        <Flex mt="40px">
          <Text
            fontFamily="Manrope"
            fontSize="16px"
            fontWeight="400"
            color="#021D37"
            mr="10px"
          >
            Don't have an account ?
          </Text>
          <Link as={NavLink} to="/signup" textDecoration="underline">
            Sign Up
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default Login;
