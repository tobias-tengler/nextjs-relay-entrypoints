import {
  Environment,
  Network,
  RecordSource,
  Store,
  FetchFunction,
  Observable,
  GraphQLResponse,
  RelayFeatureFlags,
} from "relay-runtime";

RelayFeatureFlags.ENABLE_LOAD_QUERY_REQUEST_DEDUPING = true;

const fetchFn: FetchFunction = (request, variables) => {
  return Observable.create<GraphQLResponse>((sink) => {
    (async () => {
      console.log("Fetching name data...");

      await sleep(2000);

      console.log("Fetched name data");

      sink.next({ data: { name: "Tobias" } });

      sink.complete();
    })();
  });
};

function createRelayEnvironment() {
  console.log("createRelayEnvironment");

  return new Environment({
    network: Network.create(fetchFn),
    store: new Store(new RecordSource()),
    // log: (e) => console.log(e),
  });
}

let clientSideRelayEnvironment: Environment | undefined;

export function initRelayEnvironment() {
  const environment = clientSideRelayEnvironment ?? createRelayEnvironment();

  if (typeof window === "undefined") {
    return environment;
  }

  if (!clientSideRelayEnvironment) {
    clientSideRelayEnvironment = environment;
  }

  return clientSideRelayEnvironment;
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
