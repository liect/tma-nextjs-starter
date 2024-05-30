"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { SDKProvider } from "@tma.js/sdk-react";

const queryClient = new QueryClient();
const manifestUrl = process.env.NEXT_PUBLIC_MANIFEST_URL;

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <QueryClientProvider client={queryClient}>
        <SDKProvider>{children}</SDKProvider>
      </QueryClientProvider>
    </TonConnectUIProvider>
  );
}
