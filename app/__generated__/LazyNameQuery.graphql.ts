/**
 * @generated SignedSource<<e16df426c931f0d8d99a303f668f89d0>>
 * @relayHash ea1b6e36b9efbaefee37cdc45531c16c
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID ea1b6e36b9efbaefee37cdc45531c16c

import { ConcreteRequest, Query } from 'relay-runtime';
export type LazyNameQuery$variables = Record<PropertyKey, never>;
export type LazyNameQuery$data = {
  readonly name: string | null | undefined;
};
export type LazyNameQuery = {
  response: LazyNameQuery$data;
  variables: LazyNameQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "LazyNameQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "LazyNameQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": "ea1b6e36b9efbaefee37cdc45531c16c",
    "metadata": {},
    "name": "LazyNameQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "f4bbf4e69ff58f40fc876a709c2f6393";

export default node;
