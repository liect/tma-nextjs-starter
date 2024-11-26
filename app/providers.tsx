"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { init } from "@telegram-apps/sdk-react";

const queryClient = new QueryClient();
const manifestUrl = process.env.NEXT_PUBLIC_MANIFEST_URL;
if (typeof window !== "undefined") {
  init();
}
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </TonConnectUIProvider>
  );
}
