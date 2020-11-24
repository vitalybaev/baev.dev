import Head from "next/head";
import { AppType } from "next/dist/next-server/lib/utils";
import "@/styles/app.css";

const App: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="w-screen h-screen p-4 flex justify-content-center items-center">
        <div className="max-w-xs mx-auto p-3">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
};

export default App;
