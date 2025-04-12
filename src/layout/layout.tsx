import { FC, PropsWithChildren, memo } from "react";
import { Typography, Container, Box } from "@mui/material";
import { Navigation } from "./navigation/navigation";
import { NavigationItemType } from "./types/navigation-item-type";

const leftNavigationItems: NavigationItemType[] = [
  { name: "Item 1", link: "/item-1" },
  { name: "Item 2", link: "/item-2" },
];

const rightNavigationItems: NavigationItemType[] = [
  { name: "Item 3", link: "/item-3" },
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
      <Container component="main" sx={{ gridArea: "main", p: 2 }}>
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
