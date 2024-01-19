"use client";

import Movies from "@/components/Movies/Movies";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <Provider store={store}>
      <main className="w-full min-h-screen h-full bg-black">
        <div className="max-w-7xl w-full h-full mx-auto">
          <Navbar />
          <Movies />
        </div>
      </main>
    </Provider>
  );
}
