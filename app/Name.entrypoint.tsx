import type { EntryPoint } from "react-relay";
import type Name from "./Name";
import JSResource from "@/src/JSResource";
import NameQuery from "./__generated__/NameQuery.graphql";
import { sleep } from "@/src/RelayEnvironment";

type NameComponentType = typeof Name;
type Params = {};

const TodoAppEntryPoint: EntryPoint<NameComponentType, Params> = {
  getPreloadProps() {
    return {
      queries: {
        nameQueryRef: {
          parameters: {
            kind: "PreloadableConcreteRequest",
            // TOOD: With @preloadable we should be able to import this from a slimmer file
            params: NameQuery.params,
          },
          variables: {},
        },
      },
    };
  },
  root: JSResource<NameComponentType>("Name", async () => {
    console.log("Loading name component...");

    await sleep(1000);

    // TODO: This type assetion is wrong
    // TODO: Why the prefetch here?
    const component = (await import(/* webpackPrefetch: true */ "./Name")) as unknown as Promise<NameComponentType>;

    console.log("Loaded name component");

    return component;
  }),
};

export default TodoAppEntryPoint;