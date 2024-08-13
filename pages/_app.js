import Layout from "@/components/layout";
import "@/styles/globals.css";
import { MyContextProvider } from "@/context/context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <MyContextProvider>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer />
      </Layout>
    </MyContextProvider>
  );
}
