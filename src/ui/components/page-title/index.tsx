import { Typography } from "@mui/material";
import { FC } from "react";
import { PropsWithMandatoryChildren } from "types/props-with-mandatory-children";

export const PageTitle: FC<PropsWithMandatoryChildren> = ({ children }) => {
  return (
    <Typography variant="h4" fontWeight="bold">
      {children}
    </Typography>
  );
};
