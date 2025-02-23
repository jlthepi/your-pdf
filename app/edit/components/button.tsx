import { useNode } from "@craftjs/core";
import { useEffect, useRef } from "react";

import { Button as MaterialButton } from "@mui/material";

export const Button = ({ size, variant, color, children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      connect(drag(ref.current));
    }
  }, [connect, drag]);
  return (
    <MaterialButton ref={ref} size={size} variant={variant} color={color}>
      {children}
    </MaterialButton>
  );
};
