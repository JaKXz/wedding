import React from "react";
import PropTypes from "prop-types";
import { Box, Flex } from "rebass";
import "./layout.css";
import Image from "./image";

export default function Layout({ children }) {
  return (
    <Flex
      height="100vh"
      width="100%"
      overflow="hidden"
      sx={{
        position: "relative",
        backfaceVisibility: "hidden",
        willChange: "overflow",
      }}
    >
      <Box overflow="auto" width="60%">
        scroll spy images
        <Image />
      </Box>
      <main
        style={{
          overflow: "auto",
          width: "40%",
        }}
      >
        {children}
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </main>
    </Flex>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
