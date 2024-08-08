import Layout from "@/components/layout";
import "@/styles/globals.css";
import { MyContextProvider } from "@/context/context";

export default function App({ Component, pageProps }) {
  return (
    <MyContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MyContextProvider>
  );
}
