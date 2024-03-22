import TabMenuLayout from "@/components/some-tab-menu/layout";
import TabContextProvider from "@/contexts/tab-context-provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TabContextProvider>
      <div className="flex">
        <div className="w-[70vw] p-4">
          <Component {...pageProps} />
        </div>
        <div className="w-[30vw]">
          <TabMenuLayout />
        </div>
      </div>
    </TabContextProvider>
  );
}
