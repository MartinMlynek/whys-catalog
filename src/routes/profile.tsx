import { Typography } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";
import { JSX } from "react";

export const Route = createFileRoute("/profile")({
  component: Profile,
});

function Profile(): JSX.Element {
  return <Typography variant="h1">User profile</Typography>;
}
