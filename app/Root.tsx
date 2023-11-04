"use client";

import { Suspense, useMemo, useState, useTransition } from "react";
import { EntryPointContainer, useEntryPointLoader, useRelayEnvironment } from "react-relay";
import NameEntryPoint from "./Name.entrypoint";

export function Root() {
  const environmentProvider = useRelayEnvironmentProvider();
  const [entryPointRef, loadEntryPoint] = useEntryPointLoader(environmentProvider, NameEntryPoint);
  const [showName, setShowName] = useState(false);
  const [isLoadingName, startTransition] = useTransition();

  const toggleName = () => {
    if (!showName) {
      startTransition(() => {
        loadEntryPoint({});

        setShowName(true);
      });
    } else {
      setShowName(false);
    }
  };

  return (
    <div>
      <button onClick={toggleName}>{showName ? "Hide" : "Reveal"} name</button>

      {isLoadingName && <div>Name transition in progress...</div>}

      <Suspense fallback={<div>Loading...</div>}>{showName && entryPointRef && <EntryPointContainer entryPointReference={entryPointRef} props={{}} />}</Suspense>
    </div>
  );
}

function useRelayEnvironmentProvider() {
  const environment = useRelayEnvironment();

  return useMemo(
    () => ({
      getEnvironment: () => environment,
    }),
    [environment]
  );
}
