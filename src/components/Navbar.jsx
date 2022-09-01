import { Box, Flex, Image, Link } from "@chakra-ui/react";
import React from "react";
import Logo from "assets/logo_wavecrest.svg";

const Navbar = () => {
  const links = [
    {
      name: "Login",
      to: "/login",
    },
    {
      name: "SignUp",
      to: "/signUp",
    },
  ];

  return (
    <Flex
      bg="#021D37"
      h="91px"
      alignItems="center"
      justifyContent="space-between"
      px="91px"
    >
      <Box>
        <Image src={Logo} />
      </Box>

      <Flex>
        {links.map((link) => {
          return (
            <Link color="#FFF" textTransform="uppercase">
              {link.name}
            </Link>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Navbar;
