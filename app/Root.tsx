"use client";

import React, { Suspense, useMemo, useState, useTransition } from "react";
import { EntryPointContainer, useEntryPointLoader, useRelayEnvironment } from "react-relay";
import NameEntryPoint from "./Name.entrypoint";
import { sleep } from "@/src/RelayEnvironment";

export function Root() {
  return (
    <div>
      <EntryPointRoot />

      <LazyRoot />
    </div>
  );
}

function EntryPointRoot() {
  const environmentProvider = useRelayEnvironmentProvider();
  const [entryPointRef, loadEntryPoint] = useEntryPointLoader(environmentProvider, NameEntryPoint);
  const [showName, setShowName] = useState(false);

  const toggleName = () => {
    if (!showName) {
      loadEntryPoint({});

      setShowName(true);
    } else {
      setShowName(false);
    }
  };

  return (
    <div>
      <button onClick={toggleName}>{showName ? "Hide" : "Reveal"} name (via EntryPoint)</button>

      <Suspense fallback={<div>Loading...</div>}>
        {showName && entryPointRef && (
          <EntryPointContainer entryPointReference={entryPointRef} props={{ title: "🏃‍♂️💨" }} />
        )}
      </Suspense>
    </div>
  );
}

const LazyName = React.lazy(async () => {
  console.log("fetching lazy component...");

  await sleep(2000);

  const component = await import("./LazyName");

  console.log("fetched lazy component");

  return component;
});

function LazyRoot() {
  const [showName, setShowName] = useState(false);

  const toggleName = () => setShowName(!showName);

  return (
    <div>
      <button onClick={toggleName}>{showName ? "Hide" : "Reveal"} name (via Lazy)</button>

      <Suspense fallback={<div>Loading...</div>}>{showName && <LazyName title="🐌" />}</Suspense>
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
