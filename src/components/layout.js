import React from "react";
import PropTypes from "prop-types";
import { Box } from "rebass";
import "./layout.css";

export default function Layout({ children }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "60% 40%",
      }}
      mx="auto"
      my={0}
      maxWidth={960}
      pt={0}
    >
      <div>scroll spy</div>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </Box>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
