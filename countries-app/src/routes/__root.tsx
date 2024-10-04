import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Header from "../components/Header";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex h-full flex-col bg-zinc-900 text-zinc-300">
        <Header />
        <div className="container mx-auto h-full p-2">
          <Outlet />
        </div>
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});
