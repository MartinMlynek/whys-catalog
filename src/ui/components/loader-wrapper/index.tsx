import {
  CircularProgress,
  Box,
  Snackbar,
  Alert,
  Button,
  Typography,
  Stack,
} from "@mui/material";
import { FC, useCallback, useEffect, useState } from "react";
import { PropsWithMandatoryChildren } from "types/props-with-mandatory-children";

interface LoaderWrapperProps extends PropsWithMandatoryChildren {
  isLoading: boolean;
  loadingText: string;
  error: Error | null;
  onRetry?: () => void;
}

export const LoaderWrapper: FC<LoaderWrapperProps> = ({
  isLoading,
  error,
  loadingText,
  children,
  onRetry,
}) => {
  const [open, setOpen] = useState(false);

  const handleRetry = useCallback(() => {
    setOpen(false);
    onRetry?.();
  }, [onRetry]);

  const handleCloseAlert = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    if (error) {
      setOpen(true);
      console.error(error);
    }
  }, [error]);

  if (isLoading) {
    return (
      <Box
        height="50vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <CircularProgress color="primary" />
          <Typography variant="h5">{loadingText}</Typography>
        </Stack>
      </Box>
    );
  }

  return (
    <>
      {children}
      <Snackbar open={open} onClose={handleCloseAlert} autoHideDuration={6000}>
        <Alert
          severity="error"
          onClose={handleCloseAlert}
          sx={{ width: "100%" }}
          action={
            onRetry && (
              <Button color="inherit" size="small" onClick={handleRetry}>
                Try again
              </Button>
            )
          }
        >
          {error ? error.message : "Cannot load data"}
        </Alert>
      </Snackbar>
    </>
  );
};
