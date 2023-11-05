"use client";

import { NameQuery } from "@/app/__generated__/NameQuery.graphql";
import { EntryPointComponent, graphql, usePreloadedQuery } from "react-relay";

type PreloadedQueries = { nameQueryRef: NameQuery };

// TODO: What to do with the args?
const Name: EntryPointComponent<PreloadedQueries, any, any, any> = (props) => {
  const data = usePreloadedQuery(
    graphql`
      query NameQuery {
        name
      }
    `,
    props.queries.nameQueryRef
  );

  return <div>Name: {data.name}</div>;
};

export default Name;
