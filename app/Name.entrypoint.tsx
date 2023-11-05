import type { EntryPoint, EntryPointComponent, JSResourceReference } from "react-relay";
import JSResource from "@/src/JSResource";
import NameQueryParameters from "./__generated__/NameQuery$parameters";
import { sleep } from "@/src/RelayEnvironment";

function createEntryPoint<TParams extends {}, TComponent extends EntryPointComponent<any, any, any, any>>(
  jsResource: JSResourceReference<TComponent>,
  getPreloadProps: EntryPoint<TComponent, TParams>["getPreloadProps"]
): EntryPoint<TComponent, TParams> {
  return {
    getPreloadProps,
    root: jsResource,
  };
}

const jsResource = JSResource("Name", async () => {
  console.log("Loading name component...");

  await sleep(2000);

  // TODO: Why the prefetch here?
  const component = await import(/* webpackPrefetch: true */ "./Name");

  console.log("Loaded name component");

  return component.default;
});

// We're using this helper for easier type inference
export default createEntryPoint(jsResource, () => {
  return {
    queries: {
      nameQueryRef: {
        parameters: NameQueryParameters,
        variables: {},
      },
    },
  };
});
