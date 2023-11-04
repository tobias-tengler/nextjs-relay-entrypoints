"use client";

import { initRelayEnvironment } from "@/src/RelayEnvironment";
import { ReactNode, useMemo } from "react";
import { RelayEnvironmentProvider } from "react-relay";

export function RelayProvider({ children }: { children: ReactNode }) {
  const env = useMemo(() => initRelayEnvironment(), []);

  return <RelayEnvironmentProvider environment={env}>{children}</RelayEnvironmentProvider>;
}
