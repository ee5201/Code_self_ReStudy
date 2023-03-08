import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import ApolloSetting from "../src/components/commons/apollo";
import { globalStyles } from "../src/components/commons/styles/globalStyles";
function MYApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloSetting>
      <>
        <Global styles={globalStyles} />
        <div>
          <Component {...pageProps} />
        </div>
      </>
    </ApolloSetting>
  );
}

export default MYApp;
