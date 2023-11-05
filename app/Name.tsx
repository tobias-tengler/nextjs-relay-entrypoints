"use client";

import { NameQuery } from "@/app/__generated__/NameQuery.graphql";
import { EntryPointComponent, graphql, usePreloadedQuery } from "react-relay";

type PreloadedQueries = { nameQueryRef: NameQuery };
type Props = { title: string };

// TODO: Why are nested entrypoints second? - props would be way more natural
const Name: EntryPointComponent<PreloadedQueries, any, Props> = ({ queries, props }) => {
  const data = usePreloadedQuery(
    graphql`
      query NameQuery @preloadable {
        name
      }
    `,
    queries.nameQueryRef
  );

  return (
    <div>
      EntryPoint Name: {data.name} ({props.title})
    </div>
  );
};

export default Name;
