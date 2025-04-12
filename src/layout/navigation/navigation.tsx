import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { FC, memo } from "react";
import { NavigationItem } from "./navigation-item";
import { NavigationItemType } from "../types/navigation-item-type";

interface Props {
  title: string;
  leftNavigationItems: NavigationItemType[];
  rightNavigationItems: NavigationItemType[];
}

const navigationItemMapper = (item: NavigationItemType) => (
  <NavigationItem key={item.name} menuItems={item.subMenuItems}>
    {item.name}
  </NavigationItem>
);

const NavigationBase: FC<Props> = ({
  leftNavigationItems,
  rightNavigationItems,
  title,
}) => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ gap: 2 }}>
        <Typography
          variant="h6"
          noWrap
          component="a"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontWeight: 700,
            letterSpacing: ".3rem",
            textDecoration: "none",
          }}
        >
          {title}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          {leftNavigationItems.map(navigationItemMapper)}
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 0 }}>
          {rightNavigationItems.map(navigationItemMapper)}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export const Navigation = memo(NavigationBase);
