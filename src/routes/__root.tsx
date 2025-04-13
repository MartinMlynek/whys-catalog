import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Layout } from "../layout/layout";
import { ErrorFallback } from "../layout/error-boundary/error-fallback";

export const Route = createRootRoute({
  component: () => (
    <>
      <Layout>
        <Outlet />
      </Layout>
      <TanStackRouterDevtools position="bottom-right" />
    </>
  ),
  errorComponent: ErrorFallback,
});
