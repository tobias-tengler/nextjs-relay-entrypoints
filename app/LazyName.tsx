import { LazyNameQuery } from "@/app/__generated__/LazyNameQuery.graphql";
import { graphql, useLazyLoadQuery } from "react-relay";

export default function LazyName(props: { title: string }) {
  const data = useLazyLoadQuery<LazyNameQuery>(
    graphql`
      query LazyNameQuery {
        name
      }
    `,
    {}
  );

  return (
    <div>
      Lazy Name: {data.name} ({props.title})
    </div>
  );
}
