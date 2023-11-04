/**
 * @generated SignedSource<<67a7c21f485f86db8af1571f86f3a6e5>>
 * @relayHash 813afd3121599143f2d5bd004bd50fb6
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 813afd3121599143f2d5bd004bd50fb6

import { ConcreteRequest, Query } from 'relay-runtime';
export type NameQuery$variables = Record<PropertyKey, never>;
export type NameQuery$data = {
  readonly name: string | null | undefined;
};
export type NameQuery = {
  response: NameQuery$data;
  variables: NameQuery$variables;
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
    "name": "NameQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "NameQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": "813afd3121599143f2d5bd004bd50fb6",
    "metadata": {},
    "name": "NameQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "006509f6ed812c7d90ff4df1f6b5dc21";

export default node;
