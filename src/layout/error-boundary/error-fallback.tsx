import { Button, Card, Container, Typography } from "@mui/material";
import { memo } from "react";

const reloadApp = (): void => {
  window.location.reload();
};

const ErrorFallbackBase = () => {
  return (
    <Container
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" gutterBottom>
          An unexpected error occurred
        </Typography>
        <Typography variant="body1">
          Something went wrong. Please try reloading the application.
        </Typography>
        <Button
          onClick={reloadApp}
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
        >
          Reload Application
        </Button>
      </Card>
    </Container>
  );
};

export const ErrorFallback = memo(ErrorFallbackBase);
