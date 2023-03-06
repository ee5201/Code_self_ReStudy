import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

export default function app({ Component, pageProps }) {
  const uplodLink = createUploadLink({
    uri: "https://backendonline.codebootcamp.co.kr/graphql",
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uplodLink as inknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
