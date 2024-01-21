"use client";

import { Provider } from "react-redux";
import store from "../store";
import React from "react";
import Upcoming from "@/components/Movies/Upcoming/Upcoming";
import { Suspense } from "react";

const page = () => {
  return (
    <Provider store={store}>
      <Suspense>
        <main className="w-full min-h-screen h-full bg-black">
          <Upcoming />
        </main>
      </Suspense>
    </Provider>
  );
};

export default page;
