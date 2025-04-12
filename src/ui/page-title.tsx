import { Typography } from "@mui/material";
import React, { FC } from "react";
import { PropsWithMandatoryChildren } from "../types/props-with-children";

export const PageTitle: FC<PropsWithMandatoryChildren> = ({ children }) => {
  return <Typography variant="h3">{children}</Typography>;
};
