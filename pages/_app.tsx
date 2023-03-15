import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import ApolloSetting from "../src/components/commons/apollo";
import { globalStyles } from "../src/components/commons/styles/globalStyles";

// ////////firebase//////////
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxRn2HEHOici2awb3IJCNKeUrXubJJSsE",
  authDomain: "test01-28c8f.firebaseapp.com",
  projectId: "test01-28c8f",
  storageBucket: "test01-28c8f.appspot.com",
  messagingSenderId: "862467736807",
  appId: "1:862467736807:web:6d15588af240e587d84e42",
};

// Initialize Firebase
export const firebaseeApp = initializeApp(firebaseConfig);

// ///////////////////////////////////////////////////////////////

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
