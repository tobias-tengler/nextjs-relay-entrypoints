import { Environment, Network, RecordSource, Store, FetchFunction, Observable, GraphQLResponse } from "relay-runtime";

const fetchFn: FetchFunction = (request, variables) => {
  return Observable.create<GraphQLResponse>((sink) => {
    console.log("Fetching name data...");

    sleep(1000);

    console.log("Fetched name data");

    sink.next({ data: { name: "Tobias" } });

    sink.complete();
  });
};

function createRelayEnvironment() {
  console.log("createRelayEnvironment");

  return new Environment({
    network: Network.create(fetchFn),
    store: new Store(new RecordSource()),
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
