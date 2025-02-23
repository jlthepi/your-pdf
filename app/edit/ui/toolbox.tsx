import {
  Box,
  Typography,
  Grid2 as Grid,
  Button as MaterialButton,
} from "@mui/material";

import { Element, useEditor } from "@craftjs/core";
import { Container } from "../components/container";
import { Card } from "../components/card";
import { Button } from "../components/button";
import { Text } from "../components/text";

import { useRef, useEffect } from "react";

export const Toolbox = () => {
  const { connectors, query } = useEditor();

  const buttonRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    connectors.create(
      buttonRef.current,
      <Button
        size="small"
        children="Click Me!"
        variant="contained"
        color="primary"
      />
    );

    connectors.create(
      textRef.current,
      <Text fontSize="small" text="Hello World!" />
    );

    connectors.create(
      containerRef.current,
      <Container padding={5} background="#eee" children={"AD"} />
    );

    connectors.create(cardRef.current, <Card background="white" />);
  }, [connectors, query]);

  return (
    <Box px={2} py={2}>
      <Grid container spacing={1}>
        <Box pb={2}>
          <Typography>Drag to add</Typography>
        </Box>
        <Grid container direction="column">
          <MaterialButton ref={buttonRef} variant="contained">
            Button
          </MaterialButton>
        </Grid>
        <Grid container direction="column">
          <MaterialButton ref={textRef} variant="contained">
            Text
          </MaterialButton>
        </Grid>
        <Grid container direction="column">
          <MaterialButton ref={containerRef} variant="contained">
            Container
          </MaterialButton>
        </Grid>
        <Grid container direction="column">
          <MaterialButton ref={cardRef} variant="contained">
            Card
          </MaterialButton>
        </Grid>
      </Grid>
    </Box>
  );
};
