import { Text } from "./text";
import { Button } from "./button";
import { Container } from "./container";

import { useNode, Element } from "@craftjs/core";
import { useEffect, useRef } from "react";

export const CardTop = ({ children }) => {
  const {
    connectors: { connect },
  } = useNode();

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      connect(ref.current);
    }
  }, [connect]);

  return (
    <div ref={ref} className="text-only">
      {children}
    </div>
  );
};

CardTop.craft = {
  rules: {
    canMoveIn: (incomingNodes) =>
      incomingNodes.every((incomingNode) => incomingNode.data.type === Text),
  },
};

export const CardBottom = ({ children }) => {
  const {
    connectors: { connect },
  } = useNode();

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      connect(ref.current);
    }
  }, [connect]);

  return <div ref={ref}>{children}</div>;
};

CardBottom.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: (incomingNodes) =>
      incomingNodes.every((incomingNode) => incomingNode.data.type === Button),
  },
};

export const Card = ({ background, padding = 20 }) => {
  return (
    <Container background={background} padding={padding}>
      <Element id="text" is={CardTop} canvas>
        <Text text="Title" fontSize={20} />
        <Text text="Subtitle" fontSize={15} />
      </Element>
      <Element id="buttons" is={CardBottom} canvas>
        <Button
          size="small"
          children="Learn more"
          variant="contained"
          color="primary"
        />
      </Element>
    </Container>
  );
};
