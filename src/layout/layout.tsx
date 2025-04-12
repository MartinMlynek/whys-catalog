import { FC, PropsWithChildren, memo } from "react";
import { Typography, Container, Box } from "@mui/material";
import { Navigation } from "./navigation/navigation";
import { NavigationItemType } from "./types/navigation-item-type";

const leftNavigationItems: NavigationItemType[] = [
  {
    label: "Catalog",
    to: "/",
  },
];

const rightNavigationItems: NavigationItemType[] = [
  {
    label: "User",
    subMenuItems: [
      {
        label: "Profile",
        to: "/profile",
      },
    ],
  },
];

const LayoutBase: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "grid",
        gridTemplateAreas: `
        "header"
        "main"
        "footer"
      `,
        gridTemplateRows: "auto 1fr auto",
        gridTemplateColumns: "1fr",
        gap: 1,
      }}
    >
      <Box sx={{ gridArea: "header", alignItems: "center" }}>
        <Navigation
          title="Whys Catalog"
          leftNavigationItems={leftNavigationItems}
          rightNavigationItems={rightNavigationItems}
        />
      </Box>
      <Container
        component="main"
        maxWidth="lg"
        sx={{
          gridArea: "main",
          p: 2,
          maxWidth: "100vw",
        }}
      >
        {children}
      </Container>

      <Box sx={{ gridArea: "footer", p: 2 }} component="footer">
        <Typography variant="body2" color="textSecondary">
          &copy; 2025 Whys entry task
        </Typography>
      </Box>
    </Box>
  );
};

export const Layout = memo(LayoutBase);
