import { forwardRef, memo } from "react";
import { createLink } from "@tanstack/react-router";
import { Button } from "@mui/material";
import type { ButtonProps } from "@mui/material";
import type { LinkComponent } from "@tanstack/react-router";
import { ToType } from "../types/to-type";

interface MUIButtonLinkProps extends ButtonProps<"a"> {
  to: ToType;
}

// eslint-disable-next-line react-x/no-forward-ref
const MUIButtonLinkComponent = forwardRef<
  HTMLAnchorElement,
  MUIButtonLinkProps
>((props, ref) => <Button ref={ref} component="a" {...props} />);

const CreatedButtonLinkComponent = createLink(MUIButtonLinkComponent);

const ButtonLinkBase: LinkComponent<typeof MUIButtonLinkComponent> = (
  props
) => {
  return <CreatedButtonLinkComponent preload={"intent"} {...props} />;
};

export const ButtonLink = memo(ButtonLinkBase);
