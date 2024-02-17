import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <main className="flex flex-col w-full max-w-[1920px] m-auto">
        <Component {...pageProps} />
      </main>
    </NextUIProvider>
  );
}
