"use client";

import { Toolbox } from "./ui/toolbox";
import { Panel } from "./ui/panel";
import { Topbar } from "./ui/topbar";

import { Typography, Paper, Grid2 as Grid } from "@mui/material";

import { Container } from "./components/container";
import { Button } from "./components/button";
import { Card, CardBottom, CardTop } from "./components/card";
import { Text } from "./components/text";

// CraftJS
import { Editor, Frame, Element } from "@craftjs/core";
import styled from "@emotion/styled";

const PageWrapper = styled.div`
  margin: 0 auto;
`;

export default function Page() {
  return (
    <PageWrapper>
      <Typography variant="h5" align="center">
        A super simple page editor
      </Typography>
      <Editor resolver={{ Button, Text, Card, Container, CardTop, CardBottom }}>
        <Topbar />
        <Grid container spacing={3} style={{ paddingTop: "10px" }}>
          <Grid>
            <Frame>
              <Element is={Container} padding={5} background="#eee" canvas>
                <Card background="white" />
                <Button size="small" variant="outlined" color="primary">
                  Click
                </Button>
                <Text fontSize={15} text="Hi world!" />

                <Element is={Container} padding={5} background="#ddd" canvas>
                  <Text fontSize={15} text="It's me again!" />
                </Element>
              </Element>
            </Frame>
          </Grid>
          <Grid>
            <Paper>
              <Toolbox />
              <Panel />
            </Paper>
          </Grid>
        </Grid>
      </Editor>
    </PageWrapper>
  );
}
